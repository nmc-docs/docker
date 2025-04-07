---
sidebar_position: 1
---

# docker build

:::info

- Câu lệnh `docker build` dùng để tạo một image từ Dockerfile.
- Cấu trúc câu lệnh:

```bash
docker build [OPTIONS] [BUILD_CONTEXT]
```

:::

## 📦 **Build context là gì?**

Build context là **toàn bộ nội dung thư mục** mà Docker sẽ dùng để **copy vào trong quá trình build image** . Nó bao gồm:

- `Dockerfile` (nếu không chỉ định riêng qua `-f`)
- Các file mà `Dockerfile` sẽ sử dụng với câu lệnh như `COPY`, `ADD`, v.v.
- Các thư mục con, file cấu hình, v.v.

### 🧠 **Ví dụ cụ thể:**

```bash
docker build -t myapp:latest .
```

- Dấu `"."` nghĩa là thư mục hiện tại chính là **build context** .
- Docker sẽ gửi toàn bộ nội dung thư mục hiện tại đến Docker daemon để dùng trong quá trình build.

### ⚠️ **Lưu ý quan trọng về build context:**

- **Chỉ những file trong build context mới có thể được truy cập từ Dockerfile.**

  → Nếu file nằm ngoài thư mục build context, bạn **không thể `COPY` hoặc `ADD`** nó vào trong image.

- **Build context càng lớn thì quá trình build càng chậm** , vì Docker phải nén & gửi toàn bộ nội dung đến daemon → nên dùng `.dockerignore` để loại trừ file không cần thiết.

### 📂 **Ví dụ khác:**

```bash
docker build -t backend:v1 ./server
```

→ Build context là thư mục `./server`, chứ không phải thư mục hiện tại.

## Một số options phổ biến

| Option         | Ý nghĩa                                                                     |
| -------------- | --------------------------------------------------------------------------- |
| `-t`,`--tag`   | Gán tên và tag cho image, ví dụ `myapp:latest`                              |
| `-f`,`--file`  | Chỉ định đường dẫn đến Dockerfile nếu không nằm ở mặc định (`./Dockerfile`) |
| `--no-cache`   | Bỏ qua cache trong quá trình build (sẽ build từ đầu)                        |
| `--build-arg`  | Truyền biến môi trường (`ARG`) vào Dockerfile                               |
| `--platform`   | Xác định nền tảng cần build (ví dụ:`linux/amd64`,`linux/arm64`)             |
| `--target`     | Build đến một `stage` cụ thể trong Dockerfile multi-stage                   |
| `--pull`       | Luôn kéo phiên bản mới nhất của base image                                  |
| `--quiet`,`-q` | Chỉ hiển thị image ID sau khi build xong (im lặng)                          |

## Một số ví dụ

### Ví dụ cơ bản

```bash
# Build image từ Dockerfile trong thư mục hiện tại và gắn tag myapp:latest.
docker build -t myapp:latest .

# Chỉ định Dockerfile riêng nằm trong thư mục ./docker.
docker build -f ./docker/prod.Dockerfile -t myapp:prod .

# Bỏ qua cache khi build.
docker build --no-cache -t myapp:no-cache .

# Truyền biến NODE_ENV vào Dockerfile thông qua ARG.
docker build --build-arg NODE_ENV=production -t myapp:env .
```

### Ví dụ với `--target`

- Giả sử ta có Dockerfile như sau:

```Dockerfile
# Stage 1
FROM node:18 AS stage1
RUN echo ">> Running stage1"

# Stage 2
FROM alpine AS stage2
RUN echo ">> Running stage2"

# Stage 3
FROM ubuntu AS stage3
RUN echo ">> Running stage3"
```

- Chạy lệnh

```bash
docker build --target stage2 -t test:stage2 .
```

📦 Kết quả:

- `stage1` được build ✅
- `stage2` được build ✅
- `stage3` sẽ **không được build** ❌

**💡 Khi nào nên dùng `--target`?**

| Tình huống                                    | Lợi ích                       |
| --------------------------------------------- | ----------------------------- |
| Kiểm tra từng bước của build                  | Dễ debug                      |
| Cache nhanh hơn                               | Không cần build toàn bộ       |
| Dùng stage trung gian để test hoặc deploy tạm | Tiện lợi, tiết kiệm thời gian |
