#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
# .env.example (cập nhật)
# ------------------------------------------------------------
cat > .env.example << 'EOF'
# Sao chép file này thành .env.local rồi điền.
# KHÔNG BAO GIỜ commit file .env.local lên GitHub.

# Địa chỉ website thật (không có dấu / ở cuối)
# Ví dụ: https://smmzin.com
NEXT_PUBLIC_SITE_URL=https://smmzin.com

# Để trống các biến dưới nếu chưa dùng. Sẽ dùng khi có backend.
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SUPPORT_URL=
EOF

# ------------------------------------------------------------
# README.md — khối 1: tiêu đề + giới thiệu
# ------------------------------------------------------------
cat > README.md << 'EOF'
# SMMZin — Trang Landing Page

Trang web giới thiệu sản phẩm SMMZin — nền tảng Social Media
Marketing thế hệ mới. Đang trong giai đoạn **sắp ra mắt**.

Xây bằng: **Next.js + TypeScript + Tailwind CSS**.
Không có database. Không có backend. Deploy hoàn toàn trên **Vercel**.

---

## 1. Chạy trang web trên máy tính

Bạn cần cài **Node.js** trước (tải tại https://nodejs.org — chọn bản **LTS**).

Mở **Git Bash**, đi đến thư mục dự án:

```bash
cd /d/VocVach/SMMZin