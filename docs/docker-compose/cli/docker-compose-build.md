---
sidebar_position: 1
---

# `docker compose build`

:::info[Thông tin]

- Câu lệnh `docker compose build` được dùng để **build các image được định nghĩa trong file `docker-compose.yml`** .

:::

## Cú pháp

```bash
docker compose build [OPTIONS] [SERVICE...]
```

- `SERVICE...`: (Tùy chọn) Chỉ build service cụ thể. Nếu không chỉ định, Docker sẽ build tất cả các service có `build:` trong file `docker-compose.yml`.

## Options hay dùng

| Option                      | Ý nghĩa                                                   |
| --------------------------- | --------------------------------------------------------- |
| `--no-cache`                | Không sử dụng cache khi build (build lại từ đầu).         |
| `--pull`                    | Luôn kéo image base mới nhất từ registry trước khi build. |
| `--progress=plain`          | Hiển thị log chi tiết (debug khi cần).                    |
| `--build-arg <key>=<value>` | Truyền biến môi trường build (build arguments).           |

## Ví dụ

- Build toàn bộ các service:

  ```bash
  docker compose build
  ```

- Build một service cụ thể (ví dụ: `web_client`):

  ```bash
  docker compose build web_client
  ```

- Build không dùng cache:

  ```bash
  docker compose build --no-cache
  ```
