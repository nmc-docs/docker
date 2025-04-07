---
sidebar_position: 2
---

# docker run

:::info

- Câu lệnh `docker run` được dùng để tạo và chạy một container từ một image.

:::

## Cấu trúc câu lệnh

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

- `IMAGE`: tên image bạn muốn chạy (ví dụ: `nginx`, `mysql`, `ubuntu`, `your-image-name`)
- `COMMAND` (tuỳ chọn): lệnh được thực thi bên trong container
- `ARG` (tuỳ chọn): các tham số cho `COMMAND`

## Các options hay được sử dụng

| Option                            | Ý nghĩa                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `-d`                              | Chạy container ở chế độ nền (detached)                                                                |
| `-it`                             | Tương tác với container (thường dùng với terminal,`stdin`)                                            |
| `--name`                          | Đặt tên cho container                                                                                 |
| `-p <host_port>:<container_port>` | Map port từ host sang container                                                                       |
| `-v <host_path>:<container_path>` | Mount volume (chia sẻ thư mục giữa host và container)                                                 |
| `--rm`                            | Tự động xoá container khi nó dừng                                                                     |
| `--network`                       | Gán container vào một mạng cụ thể                                                                     |
| `--env` hoặc `-e`                 | Thiết lập riêng lẻ biến môi trường (`ENV VAR`)                                                        |
| `--env-file`                      | Load nhiều biến từ file `.env` (tính từ đường dẫn hiện tại ta đang đứng chạy `docker run` ở máy host) |
| `--restart`                       | Chính sách khởi động lại container (`no`,`always`,`on-failure`,`unless-stopped`)                      |
| `--entrypoint`                    | Ghi đè entrypoint mặc định trong image                                                                |

## Một số ví dụ

```bash
# Chạy nginx đơn giản
docker run -d -p 8080:80 nginx
```

```bash
# Chạy Ubuntu và tương tác bằng bash:
docker run -it ubuntu bash
```

```bash
# Chạy một app Node.js với volume và biến môi trường:
docker run -d \
  --name my-node-app \
  -p 3000:3000 \
  -v $(pwd):/usr/src/app \
  -e NODE_ENV=production \
  my-node-image
```

```bash
# Chạy MySQL container có password:
docker run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=my-secret-pw \
  -p 3306:3306 \
  mysql:5.7
```

```bash
# Load file .env cho biến môi trường trong image
docker run -d \
  --name my-app \
  --env-file ./config/.env \
  -p 4000:4000 \
  my-app-image
```
