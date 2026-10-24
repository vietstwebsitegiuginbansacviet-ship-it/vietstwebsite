-- VIEST auth/profile bootstrap for project avbxzhtnmfswuybvahre.
-- The full database schema and RLS policies have already been applied to the live
-- Supabase project via saved migrations. This file is intentionally limited to
-- the authentication/profile setup and is safe to re-run on that project.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select to authenticated
  using ((select auth.uid()) = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

grant select on public.profiles to authenticated;
revoke update on public.profiles from authenticated;
grant update (display_name, avatar_url, updated_at) on public.profiles to authenticated;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name, avatar_url, role)
  values (
    new.id,
    coalesce(
      nullif(trim(new.raw_user_meta_data ->> 'display_name'), ''),
      nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''),
      nullif(split_part(coalesce(new.email, ''), '@', 1), ''),
      'Người dùng'
    ),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', ''),
    'user'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

revoke all on function public.handle_new_user() from public;
revoke all on function public.handle_new_user() from anon;
revoke all on function public.handle_new_user() from authenticated;
grant execute on function public.handle_new_user() to service_role;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- Per-user reading list for the VIEST profile page.
create table if not exists public.saved_articles (
  user_id uuid not null references auth.users(id) on delete cascade,
  article_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, article_id)
);

alter table public.saved_articles enable row level security;

drop policy if exists "saved_articles_select_own" on public.saved_articles;
create policy "saved_articles_select_own"
  on public.saved_articles for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "saved_articles_insert_own" on public.saved_articles;
create policy "saved_articles_insert_own"
  on public.saved_articles for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "saved_articles_delete_own" on public.saved_articles;
create policy "saved_articles_delete_own"
  on public.saved_articles for delete to authenticated
  using ((select auth.uid()) = user_id);

grant select, insert, delete on public.saved_articles to authenticated;

-- Public place reviews are stored separately from any legacy review table so
-- the VIEST API has a stable, documented schema.
create table if not exists public.viest_place_reviews (
  id bigint generated always as identity primary key,
  place_name text not null check (char_length(place_name) between 1 and 160),
  display_name text not null default 'Người đọc VIEST' check (char_length(display_name) between 1 and 80),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(comment) between 1 and 1200),
  created_at timestamptz not null default now()
);

alter table public.viest_place_reviews enable row level security;

drop policy if exists "viest_place_reviews_read_public" on public.viest_place_reviews;
create policy "viest_place_reviews_read_public"
  on public.viest_place_reviews for select to anon, authenticated
  using (true);

drop policy if exists "viest_place_reviews_insert_public" on public.viest_place_reviews;
create policy "viest_place_reviews_insert_public"
  on public.viest_place_reviews for insert to anon, authenticated
  with check (true);

grant select, insert on public.viest_place_reviews to anon, authenticated;

create table if not exists public.viest_quiz_results (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  difficulty text not null check (difficulty in ('medium', 'hard', 'mixed')),
  score integer not null check (score >= 0),
  total_questions integer not null check (total_questions > 0),
  created_at timestamptz not null default now()
);

alter table public.viest_quiz_results enable row level security;

drop policy if exists "viest_quiz_results_select_own" on public.viest_quiz_results;
create policy "viest_quiz_results_select_own"
  on public.viest_quiz_results for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "viest_quiz_results_insert_own" on public.viest_quiz_results;
create policy "viest_quiz_results_insert_own"
  on public.viest_quiz_results for insert to authenticated
  with check ((select auth.uid()) = user_id);

grant select, insert on public.viest_quiz_results to authenticated;
