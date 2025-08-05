---
sidebar_position: 6
---

# `docker compose ps`

:::info[Thông tin]

- Lệnh `docker compose ps` dùng để **liệt kê thông tin chi tiết về các container** đang chạy (hoặc đã được tạo) bởi một Docker Compose project.
- ✅ Mục đích:
  - Hiển thị danh sách các container thuộc project hiện tại (thư mục chứa `docker-compose.yml`)
  - Cho biết trạng thái, cổng, tên service, v.v.

:::

## ✅ Cú pháp:

```bash
docker compose ps
```

## ✅ Ví dụ đầu ra:

```bash
NAME           IMAGE              COMMAND                  SERVICE        CREATED          STATUS          PORTS
redis_server   redis:7.2-alpine   "docker-entrypoint.s…"   redis_server   24 seconds ago   Up 23 seconds   0.0.0.0:6380->6379/tcp, [::]:6380->6379/tcp
```

**Ý nghĩa:**

- `NAME`: Tên đầy đủ của container (theo format: `<project>_<service>`)
- `SERVICE`: Tên service ta đặt trong file `docker-compose.yml`
- `STATUS`: Trạng thái container
- `PORTS`: Các port đã được mapping ra ngoài

## ✅ Một số tùy chọn hữu ích:

| Option              | Mô tả                                                   |
| ------------------- | ------------------------------------------------------- |
| `--services`        | Chỉ hiển thị tên các service, không liệt kê container   |
| `--all`             | Hiển thị cả container đã dừng                           |
| `--quiet` hoặc `-q` | Chỉ hiển thị ID container (hoặc tên), phục vụ scripting |
| `--format json`     | Trả về kết quả dưới dạng JSON (để phân tích dễ hơn)     |

## 🔁 So sánh với `docker ps`:

| Lệnh                | Hiển thị container              | Bị giới hạn bởi Compose project | Hiển thị theo service |
| ------------------- | ------------------------------- | ------------------------------- | --------------------- |
| `docker ps`         | ✅ (toàn bộ hệ thống)           | ❌                              | ❌                    |
| `docker compose ps` | ✅ (chỉ trong project hiện tại) | ✅                              | ✅                    |
