---
sidebar_position: 1
---

# `docker compose up`

:::info[Thông tin]

- Lệnh `docker compose up` là một trong những lệnh quan trọng nhất khi làm việc với Docker Compose. Nó được dùng để **khởi động toàn bộ các dịch vụ (services)** được định nghĩa trong file `docker-compose.yml`.
- ✅ Mục đích chính của `docker compose up`
  - **Build images (nếu chưa có)**
  - **Tạo và khởi chạy containers cho các services**
  - **Thiết lập mạng và volumes nếu cần**
  - **Gắn log của các container lên terminal để theo dõi**

:::

🧩 Các tùy chọn (options) thường dùng:

| Option                | Mô tả                                                              |
| --------------------- | ------------------------------------------------------------------ |
| `-d`,`--detach`       | Chạy container ở chế độ nền (background), không hiển thị log       |
| `--build`             | Bắt buộc build lại image trước khi chạy                            |
| `--force-recreate`    | Luôn luôn tạo lại container, kể cả khi không có thay đổi           |
| `--no-build`          | Không build lại image, dùng image có sẵn                           |
| `--no-deps`           | Không khởi động các service phụ thuộc, chỉ chạy service chỉ định   |
| `--remove-orphans`    | Xóa container không còn định nghĩa trong file `docker-compose.yml` |
| `--scale SERVICE=NUM` | Scale một service lên nhiều container                              |

✅ Ví dụ cụ thể: Build lại image và chạy service ở chế độ nền:

```bash
docker compose up -d --build
```

---

## ✅ Option `-f` / `--file`: chỉ định file `docker-compose.yml`

```bash
docker compose -f docker-compose.staging.yml up
```

- Mặc định, Docker Compose sẽ tìm file tên là `docker-compose.yml` ở thư mục hiện tại.
- Nếu ta muốn dùng một file khác (ví dụ môi trường staging, production…), hãy dùng `-f`.

💡 Có thể **chỉ định nhiều file** (nối chồng cấu hình):

```bash
docker compose -f docker-compose.yml -f docker-compose.override.yml up
```

---

## ✅ Option `--env-file`: chỉ định file `.env` chứa biến môi trường

:::note

- Ở [mục trước](../structure), bạn thấy trong file docker compose, mình có sử dụng các biến như `${MYSQL_DATABASE_NAME}`, `${MYSQL_PASSWORD}` `${MYSQL_PASSWORD}`,... Khi ta chỉ định option `--env-file` thì các biến môi trường trong file env đó sẽ được inject vào biến tương ứng trong file `docker-compose.yaml`.

:::

:::caution[Lưu ý]

- Option `--env-file` này **KHÔNG LIÊN QUAN GÌ ĐẾN** `env_file` ở trong service.

:::

```bash
docker compose --env-file .env.staging up
```

- Docker Compose mặc định sẽ tìm `.env` ở thư mục hiện tại nếu không chỉ định.
- Với `--env-file`, ta có thể **chỉ rõ file .env khác** , như `.env.dev`, `.env.prod`, v.v.

> 🔥 **Ưu điểm** : Giúp dễ dàng cấu hình và chạy ở nhiều môi trường khác nhau (dev, staging, prod...).

---

## ✅ Kết hợp các option:

Ví dụ: Dùng `docker-compose.staging.yml`, nạp file `.env.staging`, build lại image và chạy ở chế độ nền:

```bash
docker compose -f docker-compose.staging.yml --env-file .env.staging up --build -d
```

:::note

- Đường dẫn cho các thuộc tính `-f`, `--env-file` tính từ thư mục ta đang đứng chạy lệnh `docker compose up`

:::

:::caution[Lưu ý]

- Nếu ta sử dụng các option `-f`, `--env-file` thì đối với tất cả các lệnh compose khác (`docker compose ls, ps, images,...`), ta đều phải chỉ định lại, nếu không sẽ gây lỗi, ví dụ, nếu ta khởi động compose như sau:

```bash
docker compose -f db.docker-compose.yaml --env-file .env.prod up -d
```

thì sử dụng các lệnh khác liên quan đến compose phải chỉ định lại option đó:

```bash
docker compose -f db.docker-compose.yaml --env-file .env.prod ps
```

```bash
docker compose -f db.docker-compose.yaml --env-file .env.prod images
```

:::
