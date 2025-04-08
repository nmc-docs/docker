---
sidebar_position: 4
---

# Volume và Bind Mount

## 1. Docker Volume là gì

- Volume trong Docker là một cơ chế được thiết kế để lưu trữ dữ liệu bền vững (persistent data) và chia sẻ dữ liệu giữa các container hoặc giữa container và host (máy chủ). Không giống như hệ thống tệp mặc định của container (chỉ tồn tại trong suốt vòng đời của container), volume được quản lý bởi Docker và tồn tại độc lập với container, giúp dữ liệu không bị mất khi container bị xóa hoặc khởi động lại.
- Đặc điểm chính của volume:
  - **Bền vững:** Dữ liệu trong volume vẫn được giữ nguyên ngay cả khi container ngừng hoạt động hoặc bị xóa.
  - **Tách biệt:** Volume không bị ràng buộc bởi hệ thống tệp của container, giúp dễ dàng quản lý và sao lưu.
  - **Hiệu suất cao:** Volume thường được lưu trữ trên hệ thống tệp của host, cung cấp tốc độ đọc/ghi nhanh hơn so với hệ thống tệp bên trong container.
  - **Chia sẻ:** Có thể được sử dụng bởi nhiều container cùng lúc.

## 2. Bind Mount là gì?

- **Bind Mount** là cách mount một thư mục cụ thể từ máy chủ (host) vào trong container.
- **Bind Mount** liên kết trực tiếp một thư mục/tệp từ host vào container, không được Docker quản lý chặt chẽ như volume.
- **Bind Mount** trong Docker được sử dụng khi ta cần ánh xạ trực tiếp một thư mục hoặc tệp từ hệ thống tệp của máy chủ (host) vào container. Đây là một cách linh hoạt để kết nối dữ liệu giữa host và container, nhưng nó khác với volume ở chỗ không được Docker quản lý hoàn toàn. Ví dụ khi ta chạy project ở môi trường dev bằng Docker. Xem ví dụ bên dưới để hiểu hơn.

## 3. So sánh Volume với Bind Mount

| Tiêu chí              | Volume                 | Bind Mount                                     |
| --------------------- | ---------------------- | ---------------------------------------------- |
| Quản lý bởi Docker    | ✅ Có                  | ❌ Không                                       |
| Đường dẫn             | Tự động (/var/lib/...) | Chỉ định rõ trên máy host (/home/user/project) |
| Độ an toàn            | Cao hơn                | Có thể bị xung đột hoặc lỗi                    |
| Dùng trong dev        | Có thể                 | ✅ Thường dùng                                 |
| Dùng trong production | ✅ Khuyến nghị         | Không khuyến khích                             |

## 4. Ví dụ về Volume

### Ví dụ 1: Lưu trữ cơ sở dữ liệu MySQL

- Đầu tiên, ta tạo volume thông qua câu lệnh:

```bash
docker volume create mysql-data
```

- Tiếp theo, ta dùng volume trong container:

```bash
docker run -d --name mysql-container \
  -v mysql-data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  mysql:latest
```

- Tạo một container MySQL với volume `mysql-data` để lưu trữ dữ liệu cơ sở dữ liệu.
- Nếu container bị xóa, dữ liệu trong `mysql-data` vẫn được giữ nguyên và có thể gắn lại vào container mới.

### Ví dụ 2: Chia sẻ dữ liệu giữa các container

- Vì volume được quản lý bởi Docker và không phụ thuộc vào container nào nên nó có thể là cầu nối giao tiếp dữ liệu giữa các containers với nhau.
- Sau đây là một ví dụ:
- 📁 Cấu trúc thư mục:

```vbnet
shared-volume/
├── writer/
│   ├── Dockerfile
│   └── writer.sh
├── reader/
│   ├── Dockerfile
│   └── reader.sh
```

```sh title="shared-volume/writer/writer.sh"
#!/bin/sh
echo "Hello from writer at $(date)" >> /data/data.txt
sleep infinity
```

```Dockerfile title="shared-volume/writer/Dockerfile"
FROM alpine
COPY writer.sh /writer.sh
RUN chmod +x /writer.sh
CMD ["/writer.sh"]
```

```sh title="shared-volume/reader/reader.sh"
#!/bin/sh
echo "Reader container is reading file:"
cat /data/data.txt
sleep infinity
```

```Dockerfile title="shared-volume/reader/Dockerfile"
FROM alpine
COPY reader.sh /reader.sh
RUN chmod +x /reader.sh
CMD ["/reader.sh"]
```

- 🛠 Build image:

```bash
# Từ thư mục gốc shared-volume/
docker build -t writer-image ./writer
docker build -t reader-image ./reader
```

- 🧪 Chạy container và chia sẻ volume:

```bash
# Tạo volume dùng chung
docker volume create shared-data

# Chạy writer (ghi vào file data.txt)
docker run -d --name writer-container -v shared-data:/data writer-image

# Chạy reader (đọc từ file data.txt)
docker run -d --name reader-container -v shared-data:/data reader-image
```

:::info[Kết quả]

- Chạy lệnh: `docker logs reader-container`, ta sẽ thấy nội dung `Hello from writer at ...` được ghi bởi container `writer` và được đọc bởi `reader`.
- Mỗi khi ta thay đổi nội dung bên trong file `/data/data.txt` (bằng cách truy cập vào container bằng lệnh `docker exec` và sửa nội dung file), sau đó ở bên trong container `reader-container`, ta thực hiện lại lệnh `cat /data/data.txt`, ta sẽ thấy nội dung được cập nhật theo như ta đã sửa trước đó.

:::

## 5. Ví dụ về Bind Mount

### Ví dụ 1: Chạy project Nodejs ở môi trường dev bằng Docker kèm hot reload (auto-restart khi code thay đổi)

- 📁 Cấu trúc thư mục:

```vbnet
node-docker-hotreload/
├── Dockerfile
├── package.json
├── index.js
```

```json title="package.json"
{
  "name": "node-docker-hotreload",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {},
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

```js title="index.js"
const http = require("http");

const server = http.createServer((req, res) => {
  res.end(`Hello from Node.js! Time: ${new Date().toISOString()}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

```Dockerfile title="Dockerfile"
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json first to cache npm install
COPY package.json .

# Install dependencies (including nodemon)
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 3000

# Run app with nodemon for hot reload
CMD ["npm", "start"]
```

- 🏃‍♂️ Chạy với Docker + Bind Mount:

```bash
# Build image
docker build -t node-hotreload .
```

```bash
# Run container với bind mount:
docker run -d \
  -p 3000:3000 \
  -v ${PWD}:/app \
  -v /app/node_modules \
  --name node-dev \
  node-hotreload
```

:::note

- 📌 Giải thích:

* `-v ${PWD}:/app`: mount code từ máy thật vào container.
* `-v /app/node_modules`: tránh ghi đè `node_modules` của container bằng thư mục rỗng trên máy host.
* `nodemon` sẽ tự reload khi ta chỉnh sửa `index.js`.

:::

### Ví dụ 2: Bind Mount MySQL Data từ thư mục từ máy host vào container

- Ở [ví dụ trước](#ví-dụ-1-lưu-trữ-cơ-sở-dữ-liệu-mysql), ta đã lưu trữ dữ liệu của MySQL vào **Volume** của Docker, bây giờ ta sẽ lưu dữ liệu đó ra một thư mục riêng ở máy host bằng cách sử dụng **Bind Mount**.

```bash
docker run -d --name mysql-container \
  -v ./db/mysql-data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  mysql:latest
```

👉 Sau khi chạy câu lệnh trên, toàn bộ dữ liệu trong MySQL sẽ được lưu bên trong thư mục `./db/mysql-data` ở máy host.

## 6. Các câu lệnh CLI để quản lý Volume

| Lệnh                                 | Mô tả                                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------- |
| `docker volume create [VOLUME_NAME]` | Tạo mới một volume                                                                          |
| `docker volume ls`                   | Xem danh sách tất cả các volume                                                             |
| `docker volume rm [...VOLUME_NAME]`  | Xóa một hoặc nhiều volume, mỗi volume cách nhau bởi dấu cách                                |
| `docker volume prune`                | Xóa hết các **anonymous volumes** (các volumes không được sử dụng bởi bất kỳ container nào) |
| `docker volume prune -a`             | Xóa hết tất cả các local volume                                                             |

## 7. Một số lưu ý

:::caution[Lưu ý]

- Khi sử dụng bind mount, hãy tạo file `.dockerignore` để tránh copy toàn bộ thư mục không cần thiết vào image.
- Quyền truy cập: Đảm bảo quyền đọc/ghi trên volume phù hợp với container (đặc biệt khi dùng bind mount).
- Dọn dẹp: Sử dụng `docker volume prune` để xóa các volume không còn sử dụng, tránh chiếm dụng dung lượng.

:::
