---
sidebar_position: 4
---

# `docker compose start`

:::info[Thông tin]

- Lệnh `docker compose start` được dùng để **khởi động lại các container đã được tạo nhưng đang ở trạng thái dừng (stopped)**. (bị dừng bởi lệnh [docker compose stop](./docker-compose-stop))

:::

## Cú pháp

```bash
docker compose start [SERVICE...]
```

- `SERVICE...`: (tuỳ chọn) Tên service cụ thể trong `docker-compose.yml`. Nếu không chỉ định, tất cả các service sẽ được start.

:::caution[Lưu ý]

- **Chỉ start các container đã tồn tại** (tức là đã từng `docker compose up` hoặc `docker compose create`).
- **Không tạo mới container, không build image, không đọc lại Dockerfile**.
- Nếu container chưa được tạo trước đó, `start` sẽ báo lỗi.

:::
