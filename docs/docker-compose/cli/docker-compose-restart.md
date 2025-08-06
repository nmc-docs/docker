---
sidebar_position: 6
---

# `docker compose restart`

:::info[Thông tin]

- Lệnh `docker compose restart` dùng để **restart (khởi động lại)** các container do Docker Compose quản lý — tức là nó sẽ **dừng (stop)** rồi **khởi động lại (start)** các container đó **mà không xóa gì cả** .

✅ Mục đích chính:

- Dùng khi ta đã chỉnh sửa các cấu hình trong file `compose.yaml`, thay đổi biến môi trường,... và muốn chạy lại để cập nhật mới nhất.
- Các container được restart vẫn giữ nguyên:
  - Container ID
  - Volume (dữ liệu)
  - Network
  - Image

:::

## ✅ Cú pháp:

```bash
docker compose restart
```

Hoặc chỉ restart một service cụ thể:

```bash
docker compose restart <service_name>
```
