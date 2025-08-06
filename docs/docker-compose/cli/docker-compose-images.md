---
sidebar_position: 10
---

# `docker compose images`

:::info[Thông tin]

- Lệnh `docker compose images` dùng để **liệt kê tất cả các Docker images** đang được sử dụng bởi các service trong một Docker Compose project.

* Lệnh này sẽ hiển thị thông tin về image mà mỗi service đang sử dụng:
  - Tên image
  - Thẻ (tag)
  - ID image
  - Dung lượng image

:::

## ✅ Cú pháp:

```bash
docker compose images
```

## ✅ Ví dụ đầu ra:

```bash
SERVICE   REPOSITORY          TAG       IMAGE ID       SIZE
web       nginx               latest    d1a364dc548d   133MB
app       myapp               v1.0.0    b1b2b2c1d2d2   240MB
db        postgres            14        a3a3a3a3b3b3   370MB
```

- **Ý nghĩa các cột:**
  - `SERVICE`: Tên service trong file `docker-compose.yml`
  - `REPOSITORY`: Tên image (repository name)
  - `TAG`: Thẻ của image (version, ví dụ: `latest`, `v1.0.0`, v.v.)
  - `IMAGE ID`: Mã định danh của image (SHA ID rút gọn)
  - `SIZE`: Dung lượng image

## ✅ Khi nào dùng `docker compose images`?

- Kiểm tra xem **các service đang dùng image nào**
- Đối chiếu image đang dùng có đúng phiên bản mong muốn chưa
- Xem image nào đang **chiếm nhiều dung lượng**
- Phối hợp với `docker image prune` để dọn dẹp

## 🧠 Khác gì với `docker images`?

| Lệnh                    | Hiển thị gì?                                 | Phạm vi                      |
| ----------------------- | -------------------------------------------- | ---------------------------- |
| `docker images`         | Toàn bộ image trên hệ thống                  | Tất cả image đã pull/build   |
| `docker compose images` | Image của các service trong project hiện tại | Chỉ Compose project hiện tại |
