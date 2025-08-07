---
sidebar_position: 11
---

# `docker compose logs`

:::info[Thông tin]

- Lệnh `docker compose logs` được dùng để **xem log (nhật ký)** của các container trong một ứng dụng Docker Compose.

:::

## Cú pháp

```bash
docker compose logs [OPTIONS] [SERVICE...]
```

- `SERVICE...`: _(tuỳ chọn)_ Tên một hoặc nhiều service cụ thể muốn xem log. Nếu không chỉ định, log của tất cả các service sẽ được hiển thị.

## Các tùy chọn (Options)

| Tùy chọn            | Ý nghĩa                                                   |
| ------------------- | --------------------------------------------------------- |
| `-f`,`--follow`     | Theo dõi log theo thời gian thực (giống `tail -f`).       |
| `--tail="n"`        | Chỉ hiển thị `n` dòng log cuối cùng (mặc định là tất cả). |
| `-t`,`--timestamps` | Hiển thị dấu thời gian trước mỗi dòng log.                |
| `--no-color`        | Tắt màu trong log (hữu ích khi redirect log sang file).   |

## Ví dụ

- Theo dõi log theo thời gian thực của service `web`:

  ```bash
  docker compose logs -f web
  ```

- Xem 100 dòng log cuối cùng:

  ```bash
  docker compose logs --tail=100
  ```
