---
sidebar_position: 1
slug: /
---

# Giới thiệu về Docker

## 1. Docker là gì?

**Docker** là một nền tảng mã nguồn mở cho phép ta đóng gói ứng dụng và các thành phần phụ thuộc của nó vào một **container** — một đơn vị tiêu chuẩn để phát triển và triển khai phần mềm.

Docker giúp giải quyết vấn đề “chạy được trên máy tôi nhưng không chạy trên máy bạn” bằng cách tạo ra một môi trường đồng nhất, có thể tái sử dụng và dễ dàng triển khai.

## 2. Lợi ích khi sử dụng Docker

- 🚀 **Triển khai nhanh chóng**: Container khởi động nhanh hơn so với máy ảo.
- 🔁 **Tái sử dụng**: Dockerfile và Image có thể tái sử dụng nhiều lần.
- 🧪 **Môi trường nhất quán**: Tránh xung đột giữa các môi trường máy phát triển và máy sản xuất.
- 📦 **Đóng gói đầy đủ**: Bao gồm tất cả dependencies, config, libraries trong 1 image.
- 🌐 **Dễ dàng chia sẻ**: Image có thể đẩy lên Docker Hub để chia sẻ cho người khác hoặc CI/CD pipeline.

## 3. So sánh Docker và Máy ảo (Virtual Machine)

| Tiêu chí           | Docker Container                   | Virtual Machine              |
| ------------------ | ---------------------------------- | ---------------------------- |
| Khởi động          | Rất nhanh (vài giây)               | Chậm (vài phút)              |
| Dung lượng         | Nhẹ (MB)                           | Nặng (GB)                    |
| Hiệu năng          | Gần như hiệu năng gốc              | Giảm hiệu năng do hypervisor |
| Tính cách ly       | Cách ly quá trình và file hệ thống | Cách ly toàn bộ hệ điều hành |
| Yêu cầu tài nguyên | Ít tài nguyên hơn                  | Cần nhiều CPU/RAM            |

## 4. Các thành phần chính của Docker

### 🧱 1. Docker Image

- Là một template chỉ đọc, chứa tất cả code, dependencies và cấu hình để chạy một container.
- Ví dụ: image của **nginx**, **nodejs**, **mysql**, v.v.

### 📦 2. Docker Container

- Là một instance của image đang chạy.
- Có thể xem container là một **ứng dụng độc lập đang hoạt động**.

### ⚙️ 3. Docker Engine

- Là dịch vụ nền (daemon) chạy trên hệ thống để tạo và quản lý container.

### 🌐 4. Docker Hub / Docker Registry

- Là nơi lưu trữ và chia sẻ Docker Image.
- Docker Hub là registry công khai mặc định (https://hub.docker.com).

## 5. Cài đặt Docker

- Cài đặt tại đường dẫn sau: [Cài đặt Docker](https://docs.docker.com/get-started/get-docker/)
- Sau khi cài đặt, gõ các lệnh sau để kiểm tra xem Docker được cài đặt thành công hay chưa:

```bash
docker version
docker info
```
