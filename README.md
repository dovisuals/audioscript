# Audioscript — Landing Page (Apple HIG Design)

Landing page giới thiệu và promote ứng dụng **Audioscript** theo phong cách Apple Product Showcase tối giản, đẳng cấp và tone giọng vui vẻ, chuẩn bro code.

> **Lưu ý bảo toàn:** Dự án landing page này được tạo độc lập tại thư mục riêng `scratch/audioscript-landing`, **TUYỆT ĐỐI KHÔNG ĐỘNG CHẠM GÌ ĐẾN PROJECT AUDIOSCRIPT GỐC**.

---

## 🌟 Điểm nổi bật của Landing Page

1. **Apple HIG & Liquid Glass Aesthetic:**
   - Tone màu Apple Dark Mode: Nền đen sâu (`#000000`), viền kính mờ (`Liquid Glass blur`), ánh sáng ambient glow tinh tế.
   - Typography chuẩn SF Pro / Plus Jakarta Sans, độ tương phản cao (> 4.5:1), hỗ trợ accessibility và phím tắt.
   - Nút bấm to bản đạt chuẩn touch target Apple (>= 44px), hiệu ứng nhấn nảy (spring physics).

2. **3 USP cốt lõi được làm nổi bật:**
   - **Giao diện "Idiot-Proof" (Chống thao tác sai 100%):** Ẩn sạch các thông số kỹ thuật (EQ, Waveform, Routing), chỉ để lại nút GO to tướng và đồng hồ đếm ngược rõ từng giây.
   - **Mobile Remote trực tiếp (Quét QR là quẩy):** Điều khiển từ xa không cần cài app trung gian hay setup mạng LAN/IP tĩnh như QLab.
   - **Zero-Install (Không cần cài đặt):** Chạy trực tiếp trên trình duyệt, máy tính nào (Win hay Mac) cũng mở lên dùng được ngay mà không cần quyền Admin.

3. **Live Interactive Mockup (Trải nghiệm trực tiếp):**
   - Mockup giao diện MacBook: Cho phép người dùng **bấm phím Space** hoặc click trực tiếp nút **GO** trên web để chạy thử cue nhạc, đồng hồ đếm ngược và thanh tiến trình.
   - Mockup iPhone đồng bộ thời gian thực: Bấm nút trên màn hình điện thoại thì màn hình MacBook cũng nhảy cue theo.
   - Có âm thanh hiệu ứng Web Audio haptic click nhẹ nhàng, không cần tải bất kỳ file mp3 nào.

4. **Bảng so sánh Bro Code:**
   - So sánh trực quan và hóm hỉnh giữa phương pháp cũ (QLab / MultiPlay) với Audioscript.

---

## 🚀 Cách mở và chạy thử

Bạn có thể mở file `index.html` trực tiếp bằng bất kỳ trình duyệt nào:

```bash
# Cách 1: Mở trực tiếp bằng trình duyệt trên Mac
open /Users/tungdo/.gemini/antigravity/scratch/audioscript-landing/index.html

# Cách 2: Hoặc chạy qua một HTTP server nhẹ nếu thích
npx serve /Users/tungdo/.gemini/antigravity/scratch/audioscript-landing
```

---

## 🔗 Link Google Drive tải App

Link tải trọn bộ folder web app Audioscript:
```
https://drive.google.com/drive/folders/1Loddog4E6fzI087ZXjsqA48wcrF7VIgt?usp=sharing
```
