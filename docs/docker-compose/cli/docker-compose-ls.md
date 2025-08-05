---
sidebar_position: 5
---

# `docker compose ls`

:::info[Thông tin]

- Lệnh `docker compose ls` (hoặc `docker compose list`) được dùng để **liệt kê tất cả các project Docker Compose đang tồn tại trên máy** (tức là những nhóm container do Compose tạo ra từ các thư mục khác nhau).
- ✅ Mục đích của `docker compose ls`:
  - Hiển thị danh sách các **project Compose** (mỗi project tương ứng với một `docker-compose.yml`)
  - Cho biết các thông tin như:
    - **Tên project**
    - **Trạng thái hoạt động** (`running`, `exited`)
    - **Số lượng service**
    - **Số lượng container**
    - **Đường dẫn đến thư mục gốc của Compose**

:::

## ✅ Cú pháp:

```bash
docker compose ls
```

## ✅ Ví dụ đầu ra:

```bash
NAME                STATUS              CONFIG FILES
myproject           running(3)          /home/user/project/docker-compose.yml
test_env            exited(2)           /home/user/test/docker-compose.yml
```

**Ý nghĩa:**

- `NAME`: Tên của Compose project (mặc định là tên thư mục chứa file `docker-compose.yml`, trừ khi dùng `-p`)
- `STATUS`: Trạng thái container (số lượng container đang chạy, exited, etc.)
- `CONFIG FILES`: Đường dẫn đến file YAML cấu hình

## ✅ Các option hữu ích:

| Option          | Mô tả                                                                                 |
| --------------- | ------------------------------------------------------------------------------------- |
| `--all`         | Hiển thị tất cả Compose project, kể cả đã dừng (mặc định chỉ hiện cái đang hoạt động) |
| `--format json` | Trả về kết quả dưới dạng JSON (hữu ích cho script hoặc xử lý tự động)                 |

:::note[🧠 Lưu ý]

- Một "Compose project" là tập hợp các container, volume, network… được Docker Compose tạo ra khi ta chạy `docker compose up`.
- Nếu ta dùng Compose ở nhiều thư mục khác nhau, `docker compose ls` giúp ta quản lý và theo dõi được môi trường nào còn đang chạy.

:::
