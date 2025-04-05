---
sidebar_position: 2
---

# Docker Images

## 1. Docker Image là gì?

**Docker Image** là một **template chỉ đọc** chứa mã nguồn, thư viện, môi trường runtime, biến môi trường, và tất cả những gì cần thiết để chạy ứng dụng.

- Ta có thể hiểu image giống như một "bản snapshot" của một hệ thống thu nhỏ.
- Một image có thể tạo ra nhiều **container**.

📦 Ví dụ: Image `node:18-alpine` là một phiên bản Node.js nhẹ, dựa trên Alpine Linux.

## 2. Làm việc với Docker Image từ Docker Hub

### 📥 Pull một image từ Docker Hub

```bash
docker pull nginx
docker pull node:18-alpine
```

### 📃 Xem danh sách image đã tải về

```bash
docker images -a
```

### ❌ Xóa một image

```bash
docker rmi <IMAGE_NAME_OR_ID>
```

## 3. Tạo Docker Image với Dockerfile

Để tạo image tùy chỉnh, ta cần tạo một **Dockerfile** — một tập tin hướng dẫn Docker cách build image.

### 📝 Ví dụ: Dockerfile đơn giản cho Node.js app

```Dockerfile
# Base image
FROM node:18-alpine

# Thư mục làm việc trong container
WORKDIR /app

# Copy file vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ project
COPY . .

# Expose port
EXPOSE 3000

# Lệnh khởi chạy
CMD ["node", "index.js"]
```

### ⚙️ Build image từ Dockerfile

```bash
docker build -t my-node-app .
```

:::tip[Xem thêm]

- Xem thêm về **Dockerfile**: [tại đây](./reference/docker-file)
- Xem thêm về cấu trúc, options của câu lệnh `docker build`: [tại đây](./reference/cli/docker-build)

:::
