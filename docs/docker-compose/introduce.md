---
sidebar_position: 1
---

# Giới thiệu về Docker Compose

## Docker Compose là gì?

:::info[Định nghĩa]

- Docker Compose là một phần của hệ sinh thái Docker, cho phép ta mô tả cấu hình của các container (như dịch vụ, mạng, volume) trong một file cấu hình YAML (thường được đặt tên là `docker-compose.yml`). duy nhất. Thay vì chạy từng lệnh docker run riêng lẻ cho mỗi container, ta có thể sử dụng Docker Compose để khởi động toàn bộ ứng dụng với một lệnh duy nhất.

:::

## Docker Compose để làm gì?

Docker Compose được sử dụng để:

1. **Quản lý ứng dụng đa container** :

- Trong các ứng dụng phức tạp, ta thường cần nhiều container để chạy các thành phần khác nhau (ví dụ: web server, database, cache). Docker Compose cho phép ta định nghĩa tất cả các container này, cùng với cách chúng kết nối với nhau, trong một file cấu hình.

2. **Tự động hóa và đơn giản hóa triển khai** :

- Thay vì viết nhiều lệnh thủ công, ta chỉ cần một lệnh docker-compose up để khởi động toàn bộ ứng dụng, bao gồm các container, mạng, và volume.

3. **Mô tả cấu hình dễ đọc** :

- File docker-compose.yml sử dụng định dạng YAML, dễ hiểu và dễ chỉnh sửa, giúp ta mô tả các dịch vụ, mạng, và volume một cách rõ ràng.

4. **Phát triển và kiểm thử** :

- Docker Compose rất hữu ích trong môi trường phát triển, khi ta cần chạy ứng dụng với các dịch vụ phụ thuộc (như database, message queue) mà không cần cài đặt chúng trực tiếp trên máy.

5. **Đảm bảo tính nhất quán** :

- File cấu hình đảm bảo rằng môi trường phát triển, kiểm thử, và sản xuất có cấu hình giống nhau, giảm thiểu lỗi do khác biệt môi trường.

6. **Quản lý mạng và volume** :

- Docker Compose tự động tạo mạng để các container giao tiếp với nhau và quản lý các volume để lưu trữ dữ liệu.
