---
sidebar_position: 5
---

# `docker compose stop`

:::info[Thông tin]

- Lệnh `docker compose stop` được dùng để **dừng (stop) các container đang chạy** mà đã được khởi tạo bằng `docker compose up`, **nhưng không xóa** container, volume, mạng, hay image nào cả.

| Hành động                                                         | Mô tả                                                     |
| ----------------------------------------------------------------- | --------------------------------------------------------- |
| 🛑 Dừng container                                                 | Dừng tất cả các container được quản lý bởi Docker Compose |
| ❌ Không xóa                                                      | Không xóa container, network, volume, hay image           |
| ✅ Có thể restart lại sau đó bằng `docker compose start`hoặc `up` |                                                           |

:::

## ✅ Cú pháp:

```bash
docker compose stop
```

Hoặc dừng một service cụ thể:

```bash
docker compose stop <service_name>
```

## ✅ Khi nào nên dùng?

- Khi ta **muốn tạm dừng môi trường** để giải phóng tài nguyên (CPU, RAM), nhưng **không muốn mất dữ liệu** hoặc phải build lại.
- Khi ta đang làm việc trên môi trường phát triển (dev) và muốn **giữ nguyên trạng thái container/data** để tiếp tục sau này.

## 🔁 So sánh `docker compose down` và `docker compose stop`:

| Lệnh                  | Dừng container | Xóa container | Xóa volume                | Xóa network |
| --------------------- | -------------- | ------------- | ------------------------- | ----------- |
| `docker compose stop` | ✅             | ❌            | ❌                        | ❌          |
| `docker compose down` | ✅             | ✅            | ❌*(trừ khi `--volumes`)* | ✅          |
