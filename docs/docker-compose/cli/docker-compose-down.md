---
sidebar_position: 3
---

# `docker compose down`

:::info[Thông tin]

- Lệnh `docker compose down` được dùng để **dừng và gỡ bỏ toàn bộ môi trường Docker Compose** mà ta đã khởi chạy bằng `docker compose up`.

| Tác động                 | Mô tả                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| 🛑 Dừng container        | Tất cả các container hoặc container ứng với service ta chỉ định do Compose quản lý sẽ bị dừng |
| 🗑️ Xóa container         | Xóa luôn các container đó                                                                     |
| 🧱 Xóa mạng              | Gỡ mạng Docker do Compose tạo                                                                 |
| 📦 (Tuỳ chọn) Xóa volume | Nếu chỉ định, có thể xóa luôn cả volume                                                       |
| 🖼️ (Tuỳ chọn) Xóa image  | Nếu chỉ định, có thể xóa image đã build                                                       |

:::

## ✅ Cú pháp cơ bản:

```bash
docker compose down [OPTIONS]
```

Hoặc chỉ down với service cụ thể:

```bash
docker compose down [OPTIONS] [SERVICES]
```

## ✅ Các tuỳ chọn thường dùng:

| Option             | Mô tả                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| `--volumes`        | Xóa luôn volume do Compose tạo (thường là volume lưu data của database, cache, v.v.) |
| `--rmi all`        | Xóa tất cả image đã build (chỉ dùng nếu ta muốn sạch hoàn toàn)                      |
| `--remove-orphans` | Xóa các container không còn định nghĩa trong file YAML                               |
