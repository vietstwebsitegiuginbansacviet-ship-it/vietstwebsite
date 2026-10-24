# VIEST 2 – Khám phá Việt Nam qua lịch sử, văn hóa và đời sống

Phiên bản mở rộng gồm giao diện xanh đậm – vàng đồng, thư viện 20 địa danh có hồ sơ đọc riêng, 8 bài lịch sử, 9 tiểu sử nhân vật, 23 bài đọc văn hóa/xã hội/du lịch/sự kiện, trò chơi săn kho báu qua 5 địa điểm có thật ở Đà Nẵng, trang chủ giới thiệu bài nổi bật, hồ sơ thành viên lưu bài viết bằng Supabase, đánh giá, cộng đồng, bộ đếm truy cập và API quản trị có kiểm tra quyền.

> **Quan trọng:** Mã nguồn đã được chuẩn bị cho dự án Supabase `avbxzhtnmfswuybvahre`. Mình không thể đăng nhập vào tài khoản Supabase của bạn hoặc chạy migration thay bạn từ file này, vì vậy cần thực hiện bước SQL và cấu hình email dưới đây trước khi dùng online. Không có backend nào có thể truy cập dự án thật nếu chưa được cấp thông tin cấu hình hợp lệ.

## 1. Chạy trên Windows

1. Cài **Node.js LTS** từ <https://nodejs.org/>.
2. Giải nén ZIP. Mở thư mục `VIEST_Full_Website` bằng VS Code.
3. Sao chép `.env.example`, đổi tên bản sao thành `.env`.
4. Mở Terminal trong đúng thư mục website và chạy (dùng `npm.cmd` trong PowerShell để tránh lỗi Execution Policy của `npm.ps1`):

   ```bash
   npm.cmd install
   npm.cmd start
   ```

5. Mở <http://localhost:3000>. Không mở `index.html` bằng cách nhấp đúp; cách đó không chạy backend/API.

Có thể chạy `start-windows.bat` sau khi tạo `.env`.

## 2. Kết nối dự án Supabase đang có

`config.js` đang chứa URL và publishable key dùng ở trình duyệt. `.env.example` là mẫu an toàn với placeholder; hãy sao chép thành `.env` và điền URL cùng publishable key để backend kết nối Supabase:

- Project ref: `avbxzhtnmfswuybvahre`
- URL: `https://avbxzhtnmfswuybvahre.supabase.co`
- Publishable key: dùng key công khai trong `config.js` hoặc lấy từ Supabase → **Project Settings → API Keys**; không dùng service-role/secret key ở trình duyệt.

Project Supabase `avbxzhtnmfswuybvahre` có các bảng lõi của website. `supabase/schema.sql` là migration bổ sung cho hồ sơ, danh sách bài viết đã lưu và đánh giá địa danh; cần chạy script này trong SQL Editor nếu chưa áp dụng phiên bản hiện tại.

Trong `.env`, xác nhận tối thiểu:

```env
PORT=3000
SUPABASE_URL=https://avbxzhtnmfswuybvahre.supabase.co
SUPABASE_ANON_KEY=PASTE_YOUR_PUBLISHABLE_KEY_HERE
```

Thay `PASTE_YOUR_PUBLISHABLE_KEY_HERE` bằng publishable key trong Supabase → **Project Settings → API Keys**. Backend dùng publishable key cho các API thông thường; một giá trị `SUPABASE_SERVICE_ROLE_KEY` không hợp lệ sẽ không còn được ưu tiên thay cho khóa này. Publishable key có thể dùng phía trình duyệt khi RLS được cấu hình đúng; không phải mật khẩu quản trị.

### Khóa server-only (tùy chọn, cần cho số liệu quản trị nâng cao)

Nếu cần thống kê admin đọc qua server, thêm `SUPABASE_SERVICE_ROLE_KEY` vào `.env` trên máy chủ riêng. Lấy khóa trong Dashboard → Project Settings → API Keys. **Tuyệt đối không đặt service-role/secret key vào `config.js`, Git, ảnh chụp hoặc tin nhắn.** Không cần gửi khóa cho ChatGPT. Nếu bạn không muốn dùng chức năng thống kê admin nâng cao, hãy để giá trị mẫu trong `.env.example` và không thêm dòng khóa thật.

## 3. Cấu hình xác thực

Trong Supabase → Authentication → URL Configuration, thêm:

- `http://localhost:3000`
- Domain production của bạn sau khi triển khai.

Đăng ký có thể yêu cầu người dùng xác nhận email tùy thiết lập Authentication. Trigger `on_auth_user_created` trong project tạo hồ sơ `profiles` tự động sau khi Supabase Auth tạo người dùng.

Tài khoản đăng ký/đăng nhập được Supabase Auth lưu trong `auth.users`; đăng nhập là xác thực tài khoản đã tồn tại, không tạo thêm bản ghi người dùng. Hồ sơ tên hiển thị được trigger ghi vào `public.profiles` sau khi đăng ký, nếu trigger đã được áp dụng. Chạy website bằng `npm.cmd start` (hoặc `start-windows.bat`), không mở file HTML trực tiếp; nếu trang mở trực tiếp, các API backend và trạng thái phiên không hoạt động đúng.

### Bắt buộc cấu hình gửi email xác nhận

Supabase Auth đang yêu cầu xác nhận email (`mailer_autoconfirm` đang tắt). Website không thể tự bật SMTP cho dự án; người quản lý phải cấu hình trong Supabase Dashboard:

1. Chọn dự án `avbxzhtnmfswuybvahre` → **Project Settings → Authentication → SMTP Settings** (tên mục có thể được đặt dưới **Authentication → SMTP Settings** tùy phiên bản Dashboard).
2. Bật **Enable Custom SMTP**. Tạo/cấu hình dịch vụ gửi thư giao dịch (ví dụ Resend, Brevo, Postmark hoặc SendGrid), xác minh tên miền người gửi và dùng đúng SMTP host, port, username, password do nhà cung cấp cấp.
3. Điền thông tin SMTP vào Dashboard Supabase; **không** điền mật khẩu SMTP vào `config.js`, không gửi mật khẩu qua chat và không dùng `SMTP_PASS` của website thay cho SMTP của Supabase Auth.
4. Lưu cấu hình. Trong **Authentication → URL Configuration**, thêm Site URL và Redirect URLs chính xác, gồm `http://localhost:3000/**` để thử ở máy và domain triển khai. Giữ mẫu liên kết xác nhận email mặc định của Supabase hoặc dùng URL template chính thức `{{ .ConfirmationURL }}`.
5. Thử đăng ký với email do bạn sở hữu, kiểm tra cả thư rác/quảng cáo. Trên VIEST có thể chọn **Gửi lại email xác nhận**; Supabase có thể giới hạn số lần gửi liên tiếp.

SMTP mặc định của Supabase có giới hạn gửi chặt và không dành để gửi tới mọi địa chỉ người dùng; một yêu cầu đăng ký được chấp nhận **không đồng nghĩa email đã được chuyển phát**. Trạng thái trên trang chỉ kiểm tra kết nối dịch vụ Auth, không xác minh tài khoản hay mật khẩu. Nếu không nhận thư sau khi cấu hình SMTP, xem **Authentication → Logs** và nhật ký của nhà cung cấp email. Nếu hiện `Email hoặc mật khẩu chưa chính xác`, kiểm tra email đăng ký và mật khẩu; nếu quên mật khẩu, nhập email rồi chọn **Quên mật khẩu?**. Tắt xác nhận email không phải biện pháp khắc phục được khuyến nghị vì làm giảm xác thực tài khoản.

### Bật hồ sơ và danh sách bài viết đã lưu

Trong Supabase Dashboard → **SQL Editor**, chạy `supabase/schema.sql` của phiên bản website này. Script tạo bảng `saved_articles` và bật RLS để mỗi tài khoản chỉ xem, thêm hoặc xóa bài của chính mình; đồng thời tạo `viest_place_reviews` để đọc/lưu đánh giá công khai và `viest_quiz_results` để mỗi tài khoản lưu kết quả của mình. Sau đó đăng nhập, chọn **Lưu bài** trong một câu chuyện và mở **Hồ sơ** ở góc trên để xem lại. Nếu chưa chạy script, hồ sơ/đánh giá sẽ báo lỗi thay vì giả vờ đã lưu trực tuyến.

Để cấp quyền quản trị, chỉ quản trị viên dự án mới nên gán `app_metadata.role = "admin"` bằng công cụ quản trị phía máy chủ đáng tin cậy. Không cấp quyền admin bằng `user_metadata` hoặc cho người dùng tự sửa từ trình duyệt. Backend xác thực token và kiểm tra role trước khi trả thống kê.

## 4. Email phản hồi nhóm

Để gửi mail đến Gmail nhóm, tạo Google App Password (cần bật xác minh 2 bước), rồi điền trong `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=dia-chi-gmail-nhom@gmail.com
SMTP_PASS=GOOGLE_APP_PASSWORD
TEAM_EMAIL=dia-chi-gmail-nhom@gmail.com
```

Dùng App Password, **không dùng mật khẩu Gmail thông thường**. Nếu chưa cấu hình SMTP, website sẽ báo email chưa sẵn sàng thay vì giả vờ gửi thành công. Phản hồi cũng được lưu vào bảng `feedback` nếu cấu hình Supabase và quyền cơ sở dữ liệu hoạt động.

## 5. Chuyên mục trong VIEST 2

- **Dòng chảy Việt Nam / Góc lịch sử:** các mốc lịch sử, nhân vật và câu chuyện theo dòng thời gian.
- **Văn hóa – Di sản:** làng nghề, di tích, ẩm thực và phong tục; mỗi thẻ bài mở trang chi tiết riêng.
- **Xã hội hôm nay:** góc nhìn về giới trẻ, môi trường, công nghệ và đời sống; bài viết cần được biên tập và dẫn nguồn trước khi công bố rộng rãi.
- **Du lịch & Trải nghiệm:** hành trình gợi ý, mẹo tham quan và lưu ý kiểm tra thông tin chính thức.
- **Săn kho báu Đà Nẵng:** năm chặng qua Bảo tàng Điêu khắc Chăm, Thành Điện Hải, Nghĩa trủng Phước Ninh, Hải Vân Quan và Ngũ Hành Sơn. Mỗi câu trả lời mở manh mối cùng một mảnh mật thư; tiến độ trò chơi được lưu trên trình duyệt đang chơi.
- **Sự kiện & Hoạt động:** chủ đề lễ hội và hoạt động cộng đồng; lịch minh họa không phải xác nhận sự kiện hiện đang diễn ra.
- **Bản đồ khám phá:** bản đồ sơ đồ có các địa điểm, bao gồm Hoàng Sa và Trường Sa; không thay thế bản đồ tỷ lệ địa lý chính xác.
- **Cộng đồng:** feed bài đăng đọc từ Supabase; đăng bài cần đăng nhập.

Các bài biên tập mẫu trong thư mục JavaScript có trang chi tiết riêng nhưng vẫn là nội dung khởi tạo; hãy xác minh và bổ sung nguồn trước khi đưa lên môi trường công khai.

## 6. API có trong backend

- `GET /api/health` – kiểm tra trạng thái backend, kết nối cơ sở dữ liệu và email.
- `POST /api/visits` – tăng bộ đếm truy cập bằng hàm SQL an toàn.
- `GET /api/reviews/:place` và `POST /api/reviews` – đọc/gửi đánh giá địa danh.
- `GET /api/community` và `POST /api/community` – tải bài viết và đăng bài (yêu cầu đăng nhập khi đăng).
- `POST /api/quiz-results` – lưu kết quả vào `viest_quiz_results` cho người dùng đã đăng nhập.
- `POST /api/contact` – lưu phản hồi và gửi email nếu SMTP đã cấu hình.
- `GET /api/admin/summary` – thống kê giới hạn cho tài khoản có role admin và khóa server-only.

Một số nội dung giới thiệu lịch sử/di sản và câu hỏi là dữ liệu biên tập ban đầu trong `app.js`; cần bổ sung nguồn tham khảo và kiểm duyệt trước khi công bố rộng rãi. Bản đồ là sơ đồ học tập tương tác, không thay thế bản đồ địa lý tỷ lệ chính xác.

## 7. Kiểm tra sau khi chạy

1. Mở `http://localhost:3000/api/health`. Trạng thái `database: "connected"` nghĩa là backend đọc được bảng `site_stats`.
2. Nếu `configured_but_not_ready`, chạy `supabase/schema.sql`, kiểm tra Project URL/key và RLS.
3. Thử đăng ký/đăng nhập, gửi một đánh giá, gửi phản hồi, rồi kiểm tra các bảng trong Table Editor.
4. Chỉ triển khai public sau khi đã kiểm tra quyền truy cập, email và khóa bí mật.

## Bảo mật

- Không commit `.env`; `.gitignore` đã loại trừ file này.
- Không chia sẻ service-role/secret key hoặc mật khẩu Gmail.
- Không tắt RLS để “sửa lỗi nhanh”. Sửa đúng policy và chỉ cấp quyền tối thiểu.
- Express không phục vụ trực tiếp `.env`, mã backend, metadata package hoặc thư mục migration SQL.

## Bản chỉnh giao diện và lượt truy cập (2026-10)
- Đã tăng kích thước typography tổng thể, tăng độ rõ của tiêu đề, nút, thẻ và nội dung trên mobile.
- Ảnh tham khảo thiết kế được đặt tại `assets/viest-ui-reference.png` (chỉ là ảnh tham khảo giao diện, không phải screenshot của website đang chạy).
- Bộ đếm lượt truy cập không còn hiển thị số giả từ `localStorage`. Tổng số chỉ được lấy từ bảng `public.site_stats` qua backend Supabase.
- Bộ đếm tăng tối đa một lần mỗi tab session; khi tải lại trang, website đọc lại tổng đã lưu thay vì cộng thêm. Nếu API/database lỗi, giao diện hiển thị trạng thái chưa có dữ liệu, không tự tạo con số.
- API `GET /api/visits` đọc tổng hiện tại; `POST /api/visits` tăng tổng bằng RPC `increment_site_visits`.
- Cần chạy `supabase/schema.sql` trong Supabase Dashboard nếu bảng `site_stats` hoặc hàm `increment_site_visits` chưa có. Database của project `avbxzhtnmfswuybvahre` đã được cấu hình trực tiếp; migration được lưu trong lịch sử Supabase.
- Gmail App Password chỉ được đặt trong `.env` trên máy chạy backend; không đưa vào `config.js`, frontend, Git hoặc chia sẻ trong chat. Nếu đã chia sẻ mật khẩu ứng dụng, hãy thu hồi và tạo mã mới.


## Cập nhật xác thực 2026-10-21
- Frontend đã trỏ tới project Supabase `avbxzhtnmfswuybvahre`.
- Đăng ký dùng email + mật khẩu, truyền `full_name`/`display_name` vào metadata để trigger tạo hồ sơ.
- Đăng nhập khôi phục phiên Supabase, có lựa chọn lưu phiên ở local/session storage, đăng xuất và luồng gửi email đặt lại mật khẩu.
- Không có tài khoản thử nào được tạo tự động. Hãy kiểm tra luồng thực tế sau khi chạy website và cấu hình Authentication → URL Configuration trong dashboard.
- Backend `site_stats`/`community_posts` được chỉnh để dùng tên cột hiện có trong project mới.
