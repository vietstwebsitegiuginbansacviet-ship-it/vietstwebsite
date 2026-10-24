# VIEST – các chỉnh sửa trong bản hoàn chỉnh v2

- Giữ giao diện xanh ngọc đậm – vàng, logo VIEST, bố cục đa chuyên mục và responsive.
- Trang chủ có phần giới thiệu lịch sử khái quát và hướng dẫn tham gia/sử dụng; không đưa các khối quảng bá nổi bật trở lại.
- Trang khám phá mở hồ sơ riêng cho từng địa danh, có đánh giá và bình luận; gửi đánh giá qua API backend, đồng thời cập nhật danh sách ngay sau khi gửi.
- Bộ câu hỏi có lựa chọn trung bình/nâng cao/kết hợp, trộn câu hỏi ngẫu nhiên và nút tạo bộ mới/reset; kết quả được gửi về backend khi người dùng đã đăng nhập.
- Bản đồ sơ đồ có số thứ tự và danh mục tương ứng, gồm Hoàng Sa và Trường Sa; ghi rõ đây là bản đồ sơ đồ học tập, không thay thế bản đồ địa lý tỷ lệ chính xác.
- Góc lịch sử có thể mở/thu gọn nội dung đọc tiếp; thẻ anh hùng có phần tiểu sử mở rộng.
- Backend Express gồm API health, lượt truy cập, cộng đồng, đánh giá, phản hồi/email, lưu kết quả bài kiểm tra và thống kê admin.
- Sửa kiểm tra tình trạng database của `/api/health` để kiểm tra bảng `community_posts` có quyền đọc thay vì `site_stats` vốn được khóa đọc trực tiếp.
- Bộ đếm không hiển thị số mẫu 12.486 khi chưa nhận được số thực từ backend.

## Chưa thể tự hoàn tất từ mã nguồn

Để dữ liệu thực sự hoạt động trên dự án Supabase của bạn, cần chạy `supabase/schema.sql` trong SQL Editor và tạo `.env` từ `.env.example`. Email phản hồi cần Gmail App Password trong `.env`. Các bước này không thể được thực hiện từ file ZIP đơn thuần; không gửi service-role key hoặc mật khẩu Gmail qua chat.
