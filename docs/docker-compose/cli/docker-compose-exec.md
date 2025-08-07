---
sidebar_position: 12
---

# `docker compose exec`

:::info[Thông tin]

- Lệnh `docker compose exec` được dùng để **chạy một lệnh bên trong container của một service đang chạy** , tương tự như `docker exec`, nhưng dành cho Docker Compose.

:::

## Cú pháp

```bash
docker compose exec [OPTIONS] SERVICE COMMAND [ARGS...]
```

- `SERVICE`: Tên của service trong file `docker-compose.yml`.
- `COMMAND [ARGS...]`: Lệnh bạn muốn chạy trong container (ví dụ: `bash`, `ls`, `npm install`, v.v.).

## Options

| Tùy chọn        | Ý nghĩa                                                 |
| --------------- | ------------------------------------------------------- |
| `-d`,`--detach` | Chạy lệnh trong nền.                                    |
| `-e`,`--env`    | Gán biến môi trường cho lệnh.                           |
| `-T`            | Tắt TTY (không cấp terminal - hữu ích khi pipe output). |
| `--user`        | Chạy lệnh dưới user cụ thể (ví dụ:`--user root`).       |

## Ví dụ

- Mở terminal trong service `web`:

```bash
docker compose exec web sh
```

:::note

- **Không cần dùng `-it` (như trong lệnh [docker exec](../../docker-container#docker-exec)) với `docker compose exec`** , vì nó **mặc định đã cấp `-i` và `-t`** (interactive + TTY).

:::
