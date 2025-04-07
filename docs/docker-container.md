---
sidebar_position: 3
---

# Container

## 1. Container là gì?

**Container** là một instance đang chạy được tạo ra từ một Docker image. Nó hoạt động như một môi trường độc lập, nhẹ, đóng gói đầy đủ các thành phần để chạy ứng dụng.

- Image giống như **template**, còn container là **bản thể hoạt động**.
- Một image có thể chạy ra nhiều container khác nhau.

## 2. Tạo và chạy một container

### ▶️ Chạy container cơ bản

```bash
docker run nginx
```

Lệnh trên sẽ:

- Tự động pull image `nginx` nếu chưa có
- Tạo container và chạy nginx trong foreground (bạn sẽ thấy log trực tiếp)

### 🚀 Chạy container ở chế độ detached (chạy ngầm)

```bash
docker run -d nginx
```

:::info
Thêm `-d` để chạy ngầm.
:::

## 3. Các tùy chọn phổ biến khi chạy container

### 📌 Gắn tên cho container (`--name`)

```bash
docker run -d --name webserver nginx
```

### 🔀 Mở cổng từ container ra máy host (`-p`)

```bash
docker run -d -p 8080:80 nginx
```

Truy cập http://localhost:8080 để xem Nginx từ container.

### 📁 Mount volume để lưu hoặc đồng bộ dữ liệu (`-v`)

```bash
docker run -d -v $(pwd)/data:/usr/share/nginx/html nginx
```

Mount thư mục `data` từ máy host vào bên trong container.

### 🌱 Thiết lập biến môi trường (`-e`)

```bash
docker run -d -e NODE_ENV=production node-app
```

:::tip[Xem thêm]

- Xem thêm các options của câu lệnh `docker run`: [tại đây](./reference/cli/docker-run)

:::

## 4. Các câu lệnh CLI để quản lý container

| Lệnh                                                         | Mô tả                                                             |
| ------------------------------------------------------------ | ----------------------------------------------------------------- |
| `docker ps`                                                  | Xem danh sách container đang chạy                                 |
| `docker ps -a`                                               | Xem tất cả container (cả đã dừng)                                 |
| `docker stop <...container_id>`                              | Dừng 1 hoặc nhiều container theo ID                               |
| `docker start <...container_id>`                             | Khởi động lại 1 hoặc nhiều container theo ID                      |
| `docker restart <...container_id>`                           | Khởi động lại 1 hoặc nhiều container theo ID                      |
| `docker rm <...container_id>`                                | Xóa 1 hoặc nhiều container theo ID ở trạng thái stopped (đã dừng) |
| `docker container prune -f`                                  | Xóa tất cả container đang ở trạng thái stopped (đã dừng).         |
| `docker rename <CURRENT_NAME> <NEW_NAME>`                    | Thay đổi tên container                                            |
| `docker container inspect -f [container_1] [container_2]...` | Xem chi tiết thông tin về 1 hoặc nhiều container                  |

### docker logs

- Dùng để xem logs của container
- Cú pháp:

```bash
docker logs [OPTIONS] [CONTAINER_NAME_OR_ID]
```

- Các tùy chọn:

  - `-f`: Theo dõi log thời gian thực.
  - `--since`: Hiển thị log từ thời điểm cụ thể (VD: `--since="2024-04-07T15:00:00"` hoặc `--since=10m` để lấy log từ 10 phút trước).
  - `--until`: Hiển thị log cho đến thời điểm cụ thể.
  - `--tail`: Số dòng log cuối cùng muốn hiển thị (VD: `--tail=100`).
  - `-t`: Hiển thị log kèm theo dấu thời gian.

- Một số ví dụ:

```bash
# Xem 100 dòng log cuối cùng kèm timestamp:
docker logs --tail=100 -t my_container

# Xem log từ 30 phút trước đến hiện tại:
docker logs --since=30m my_container

# Xem log từ thời điểm cụ thể đến một thời điểm khác:
docker logs --since="2025-04-07T10:00:00" --until="2025-04-07T11:00:00" my_container
```

### docker port

- Dùng để hiển thị các cổng mà container Docker đang xuất ra ngoài (exposed ports) — cụ thể là ánh xạ giữa cổng bên trong container và bên ngoài host.
- Cú pháp:

```bash
docker port [CONTAINER] [PRIVATE_PORT/PROTO]
```

- Trong đó:
  - **`CONTAINER`** : tên hoặc ID của container.
  - **`PRIVATE_PORT/PROTO`** _(tuỳ chọn)_ : cổng nội bộ trong container và giao thức (TCP hoặc UDP).
- **Ví dụ 1**:

```bash
# Hiển thị tất cả port đã được ánh xạ của container có tên "my_container":
docker port my_container
```

Output mẫu:

```bash
80/tcp -> 0.0.0.0:8080
443/tcp -> 0.0.0.0:8443
```

⟶ Nghĩa là:

- Port 80 trong container được ánh xạ tới port 8080 trên host.
- Port 443 trong container được ánh xạ tới port 8443 trên host.
- **Ví dụ 2**:

```bash
docker ps

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                                            NAMES
b650456536c7        busybox:latest      top                 54 minutes ago      Up 54 minutes       0.0.0.0:1234->9876/tcp, 0.0.0.0:4321->7890/tcp   test

docker port test

7890/tcp -> 0.0.0.0:4321
9876/tcp -> 0.0.0.0:1234

docker port test 7890/tcp

0.0.0.0:4321

docker port test 7890/udp

2014/06/24 11:53:36 Error: No public port '7890/udp' published for test

docker port test 7890

0.0.0.0:4321
```
