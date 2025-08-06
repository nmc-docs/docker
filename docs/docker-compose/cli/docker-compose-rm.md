---
sidebar_position: 7
---

# `docker compose rm`

:::info[Thông tin]

- Lệnh `docker compose rm` được dùng để **xóa (remove) các container đã được tạo bằng Docker Compose**, thường là những container đã bị dừng (stopped).

:::

## Cú pháp

```bash
docker compose rm [OPTIONS] [SERVICE...]
```

- `SERVICE...` _(tùy chọn)_ : Chỉ định service cụ thể. Nếu không có, sẽ áp dụng cho tất cả các service.

## Tùy chọn hay dùng

| Option         | Ý nghĩa                                 |
| -------------- | --------------------------------------- |
| `-f`,`--force` | Không hỏi xác nhận khi xóa (xóa luôn).  |
| `-s`,`--stop`  | Dừng container đang chạy trước khi xóa. |
| `-v`           | Xóa cả volume gắn kèm container.        |

:::caution[Lưu ý]

- `docker compose rm` **chỉ xóa container** , không xóa:

  - Image (`docker image`)
  - Network
  - Volume (trừ khi thêm `-v`)

- Container phải ở trạng thái **stopped** mới xóa được, trừ khi dùng `--stop`.

:::

## Ví dụ

- Dừng và xóa container (kể cả đang chạy):

  ```bash
  docker compose rm -f --stop
  ```

- Xóa container và cả volumes liên quan:

  ```bash
  docker compose rm -f -v
  ```
