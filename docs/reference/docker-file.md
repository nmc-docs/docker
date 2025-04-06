---
sidebar_position: 2
---

# Dockerfile

📄 Dockerfile hỗ trợ các từ khóa sau:

| Từ khóa                                | Mô tả                                                           |
| -------------------------------------- | --------------------------------------------------------------- |
| [`ARG`](#arg)                          | Sử dụng biến lúc build image                                    |
| [`CMD`](#cmd)                          | Chỉ định lệnh chạy mặc định khi image được chạy trong container |
| [`COPY`](#copy)                        | Copy file và thư mục                                            |
| [`ENTRYPOINT`](#entrypoint)            | Chỉ định lệnh thực thi mặc định                                 |
| [`ENV`](#env)                          | Thiết lập biến môi trường                                       |
| [`EXPOSE`](#expose)                    | Mô tả cổng mà ứng dụng của ta đang lắng nghe.                   |
| [`FROM`](#from)                        | Tạo mới một build stage từ một base image                       |
| [`HEALTHCHECK`](#healthcheck)          | Kiểm tra tình trạng của container khi khởi động.                |
| [`LABEL`](#label)                      | Thêm metadata vào image                                         |
| [`MAINTAINER`](#maintainer-deprecated) | Chỉ định tác giả tạo ra image.                                  |
| [`RUN`](#run)                          | Execute build commands.                                         |
| [`USER`](#user)                        | Thiết lập user, group ID trong môi trường container             |
| [`WORKDIR`](#workdir)                  | Chỉ định thư mục làm việc                                       |

## COPY

- Câu lệnh `COPY` dùng để chép các file code, thư viện, dữ liệu cần thiết từ thư mục project vào trong image.
- Câu lệnh `COPY` có 2 cách viết, cách viết thứ hai áp dụng cho các đường dẫn chứa dấu cách:

```Dockerfile
COPY [OPTIONS] <src> ... <dest>
COPY [OPTIONS] ["<src>", ... "<dest>"]
```

| Option    |
| --------- |
| `--from`  |
| `--chown` |
| `--chmod` |

### 🛠️ Các tùy chọn (options)

#### 1. `--chown=<user>:<group>`

- Chỉ định **user và group ownership** của file/folder khi copy vào image.
- Ví dụ:

```Dockerfile
COPY --chown=appuser:appgroup . /app
```

- Hữu ích khi ta không muốn file mặc định là `root` trong container.

---

#### 2. `--chmod=[permission]`

- Chỉ định quyền truy cập của file sau khi sao chép vào container. Giá trị có thể là một trong các dạng:
  - **Chế độ octal** (ví dụ: `755`, `644`).
  - **Chế độ symbolic** (ví dụ: `u+x`, `a=r`).
- Ví dụ:

```Dockerfile
# Sao chép file nhưng chỉ cấp quyền đọc cho tất cả người dùng (không cho phép sửa):
COPY --chmod=644 config.json /app/config.json
```

---

#### 3. `--from=<stage>`

- Tùy chọn `--from` cho phép ta **sao chép file từ một stage khác** trong quá trình build đa giai đoạn.
- Cú pháp:

```Dockerfile
COPY --from=<stage-name-or-index> <source_path> <destination_path>
```

🧠 Mục đích:

- **Tối ưu hóa kích thước image:** Chỉ sao chép những file cần thiết từ một image build sẵn.
- **Tách biệt các bước build:** Ta có thể build project trong một stage, rồi chỉ copy kết quả (artifact) sang stage cuối cùng.

✅ Ví dụ minh họa: Multi-stage build:

```Dockerfile
# Stage 1: Build source code
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Production image
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

- Ở ví dụ trên:
  - `builder` là tên stage đầu tiên.
  - `COPY --from=builder` sẽ chỉ copy thư mục `/app/dist` từ image đó vào image hiện tại.

### `<src>`

- Đường dẫn tới tệp hoặc thư mục **tương đối với [build context](#)** (thường là thư mục ta chạy `docker build` từ đó).
- Có thể là một hoặc nhiều tệp:

```Dockerfile
COPY file1.txt file2.txt /usr/src/things/
```

```Dockerfile
COPY . /app
# Copy tất cả file, thư mục tính từ build context vào bên trong thư mục "app" ở image/container
# Giả sử thư mục bên ngoài có cấu trúc:
.
├── Dockerfile
├── index.js
├── package.json
└── src/
    └── app.js

# Thì bên trong image/container:
/app/
├── index.js
├── package.json
└── src/
    └── app.js

```

```Dockerfile
#Copy tất cả file, thư mục bên trong thư mục "src" vào bên trong thư mục "/app/src" ở image/container
COPY src/ /app/src/
```

- Ta cũng có thể dùng wildcard (\*, ?) giống như glob:

```Dockerfile
# Copy tất cả các file .js ở thư mục "src" vào thư mục "app" ở container
COPY src/*.js /app/

#Copy tất cả các file .png vào thư mục "dest" ở container
COPY *.png /dest/
```

:::caution[Lưu ý]

- Nếu có `.dockerignore`, những file bị liệt kê trong đó sẽ không được copy.
- Docker sử dụng cache theo từng lệnh. Nếu file thay đổi, lệnh `COPY` sẽ được thực hiện lại → ảnh hưởng đến hiệu suất build.
  :::

---

### `<dest>`

- Đường dẫn đích bên trong image. Có thể là thư mục hoặc file.
  - Nếu là thư mục, các file sẽ được copy vào bên trong thư mục đó.
  - Nếu thư mục không tồn tại, Docker sẽ tạo ra.

## ENV

:::info

- Lệnh `ENV` trong Dockerfile được sử dụng để đặt các biến môi trường (environment variables) bên trong image, những biến này sẽ có sẵn khi container được chạy. Điều này giúp ta cấu hình các ứng dụng bên trong container hoặc truyền thông tin cần thiết trong suốt quá trình chạy của container.
- Cú pháp:

```Dockerfile
ENV <key>=<value> ...
```

- Trong đó:
  - **`<key>`**: Tên của biến môi trường.
  - **`<value>`**: Giá trị của biến môi trường.

:::

- Ta có thể chỉ định nhiều biến môi trường cùng một lúc, mỗi biến cách nhau bằng dấu cách.
- 🧠 Mục đích của lệnh ENV:
  - Cấu hình container: Cung cấp các thông số như cổng, thư mục, hoặc thông tin cấu hình khác cho ứng dụng.
  - Đảm bảo tính di động: Giúp Docker container có thể hoạt động giống nhau trên các môi trường khác nhau, từ máy tính cá nhân, máy chủ đến môi trường cloud.
  - Dễ dàng thay đổi cấu hình: Thay vì phải thay đổi mã nguồn hoặc **Dockerfile**, ta có thể chỉ cần thay đổi giá trị của biến môi trường khi chạy container.
- 🔨 Ví dụ về lệnh ENV:

```Dockerfile
ENV NODE_ENV=production
```

👉 Biến môi trường `NODE_ENV` sẽ có giá trị là **production** trong toàn bộ container khi nó đang chạy. Các ứng dụng bên trong container có thể sử dụng giá trị này để biết container đang chạy trong môi trường sản xuất.

### Sử dụng biến môi trường trong các lệnh kế tiếp:

- Biến môi trường có thể được sử dụng trong các lệnh tiếp theo trong **Dockerfile**:

```Dockerfile
ENV APP_HOME=/app
WORKDIR $APP_HOME
COPY . $APP_HOME
```

👉 Ở đây, ta định nghĩa một biến môi trường `APP_HOME`, sau đó sử dụng nó trong lệnh `WORKDIR` và `COPY` để chỉ định thư mục làm việc và sao chép mã nguồn vào thư mục đó.

---

### Thay đổi giá trị của biến môi trường khi chạy container:

- Khi ta chạy container, ta có thể ghi đè giá trị của một biến môi trường bằng cách sử dụng tùy chọn -e trong lệnh docker run:

```bash
docker run -e NODE_ENV=development myapp
```

Trong ví dụ trên, giá trị của `NODE_ENV` sẽ được thay đổi thành `development`, dù trong Dockerfile nó đã được đặt là `production`.

## ARG

:::info

- Lệnh `ARG` trong Dockerfile được sử dụng để **định nghĩa các biến** mà có thể được **sử dụng trong quá trình build** Docker image. Các biến này chỉ có hiệu lực trong quá trình build và **không tồn tại trong container** khi image đã được tạo ra.
- Cú pháp:

```Dockerfile
ARG <name>[=<default_value>]
```

- Trong đó:
  - **`<name>`** : Tên của biến.
  - **`<default_value>`** (tùy chọn): Giá trị mặc định cho biến nếu không được cung cấp khi build.

:::

- 🧠 Mục đích của `ARG`:

  - Thiết lập giá trị cấu hình build: Ta có thể sử dụng `ARG` để truyền các giá trị vào trong Dockerfile mà có thể thay đổi được trong quá trình build.

- 🔨 Ví dụ cơ bản về `ARG`:

```Dockerfile
# Định nghĩa biến ARG với giá trị mặc định
ARG VERSION=1.0

# Sử dụng giá trị của ARG trong Dockerfile
RUN echo "Building version ${VERSION}"
```

👉 Khi build image, Docker sẽ sử dụng giá trị `1.0` cho biến `VERSION` trừ khi ta thay đổi nó khi chạy lệnh build.

### Thay đổi giá trị `ARG` khi build

- Khi build, ta có thể chỉ định giá trị của `ARG` qua tham số `--build-arg`.

```bash
docker build --build-arg VERSION=2.0 .
```

👉 Trong trường hợp này, Dockerfile sẽ sử dụng giá trị `2.0` thay vì `1.0`.

---

### Sử dụng `ARG` trong `FROM`:

- Ta có thể sử dụng `ARG` để thay đổi base image trong quá trình build:

```Dockerfile
ARG BASE_IMAGE=node:14
FROM ${BASE_IMAGE}

# Tiếp tục các lệnh khác...
```

- Khi build, ta có thể chỉ định base image như sau:

```bash
docker build --build-arg BASE_IMAGE=node:16 .
```

👉 Trong ví dụ này, Docker sẽ sử dụng `node:16` thay vì `node:14`.

---

### Kết hợp với `ENV`:

- Một khi `ARG` được định nghĩa, ta có thể chuyển giá trị của nó sang một biến môi trường (`ENV`) để sử dụng trong container khi nó chạy.

```Dockerfile
ARG VERSION=1.0
ENV VERSION=${VERSION}

RUN echo "Running version ${VERSION}"
```

👉 Trong trường hợp này, khi container được chạy, giá trị `VERSION` sẽ có sẵn trong môi trường container.

:::caution[Lưu ý]

- Biến `ARG` chỉ có thể được sử dụng trong quá trình build. Sau khi image đã được tạo ra, các biến `ARG` sẽ không tồn tại trong container.
- Nếu không chỉ định giá trị khi build, Docker sẽ sử dụng giá trị mặc định (nếu có).

:::

---

### 📌 Ví dụ đầy đủ:

```Dockerfile
# Định nghĩa ARG cho version và base image
ARG VERSION=1.0
ARG BASE_IMAGE=node:14

# Chọn base image động
FROM ${BASE_IMAGE}

# Đặt ENV từ ARG
ENV APP_VERSION=${VERSION}

# Cài đặt dependencies và sao chép mã nguồn
RUN npm install
COPY . /app

# Chạy ứng dụng
CMD ["npm", "start"]
```

- Build command:

```bash
docker build --build-arg VERSION=2.0 --build-arg BASE_IMAGE=node:16 .
```

## FROM

- Trong Dockerfile, lệnh `FROM` được dùng để **chỉ định image gốc (base image)** mà Docker sẽ sử dụng làm nền tảng để xây dựng image mới.
- Mục đích chính của FROM:
  - ✅ Xác định môi trường cơ bản: ví dụ Ubuntu, Alpine, Node.js, Python, v.v.
  - ✅ Kế thừa các công cụ và thư viện có sẵn trong image đó.
  - ✅ Là bước đầu tiên bắt buộc trong hầu hết các Dockerfile (trừ multistage build thì có thể có nhiều `FROM`).
- Ví dụ:

```Dockerfile
FROM node:18-alpine
```

👉 Dòng này nói rằng Docker sẽ bắt đầu từ image `node` phiên bản `18-alpine`, một image nhỏ gọn đã cài sẵn Node.js.

## USER

- Lệnh `USER` trong Dockerfile được dùng để **thiết lập user (người dùng)** mà các lệnh sau đó trong Dockerfile (và container khi chạy) sẽ được thực thi dưới quyền của người dùng đó.
- Cú pháp:

```Dockerfile
USER <username>[:<group>]
```

- 🧠 Mục đích:

  - **Bảo mật**: Tránh chạy container với quyền `root`, hạn chế nguy cơ tấn công.
  - **Phân quyền**: Dùng user phù hợp với ứng dụng (ví dụ `node`, `www-data`, v.v.)
  - **Chuẩn DevOps/SRE**: Các tổ chức thường không cho phép chạy container bằng `root`.

- **Ví dụ 1**: Dùng user có sẵn trong base image

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install

# Chuyển sang user node (đã có sẵn trong node image)
USER node

CMD ["node", "index.js"]
```

- **Ví dụ 2**: Tạo user mới rồi dùng

```Dockerfile
FROM python:3.10-slim

# Tạo user không phải root
RUN useradd -m myuser

# Đặt user hiện tại
USER myuser

CMD ["python", "app.py"]
```

## EXPOSE

- Lệnh `EXPOSE` trong Dockerfile dùng để **khai báo cổng (port)** mà container sẽ **lắng nghe (listen)** khi chạy. Đây là cách **document hóa** cho Docker và người dùng biết ứng dụng trong container hoạt động trên cổng nào.
- Ví dụ:

```Dockerfile
EXPOSE 3000
```

:::caution[Lưu ý]

- `EXPOSE` **không tự động mở cổng ra ngoài host**. Nó chỉ là metadata để tài liệu hoá.
- Để thật sự **truy cập từ bên ngoài** , ta cần dùng `-p` khi chạy container:

```bash
docker run -p 8080:3000 my-image
```

👉 Lúc này:

- Cổng `3000` trong container được ánh xạ ra cổng `8080` trên máy host.
- Ta có thể truy cập app qua `http://localhost:8080`.

:::

## CMD

- Lệnh `CMD` trong Dockerfile được dùng để **chỉ định lệnh mặc định sẽ được chạy** khi container khởi động.
- Cú pháp:

```Dockerfile
CMD ["executable", "param1", "param2"]
```

- Ví dụ:

```Dockerfile
CMD ["node", "index.js"]
CMD ["npm", "run", "dev"]
```

:::caution[Lưu ý]

- Trong một Dockerfile chỉ được có **một dòng** `CMD` (lệnh sau sẽ ghi đè lệnh trước).
- Nếu ta chạy `docker run IMAGE lệnh_mới` , thì lệnh đó sẽ **ghi đè CMD** .
- Ví dụ:

```bash
docker run my-image node anotherFile.js
```

→ Lệnh `node anotherFile.js` sẽ thay thế `CMD ["npm", "start"]`.

:::

## ENTRYPOINT

- Lệnh `ENTRYPOINT` trong Dockerfile dùng để **định nghĩa lệnh chính (main command)** mà container **luôn luôn chạy khi khởi động** , **không bị ghi đè** bởi tham số khi chạy `docker run`.
- Lệnh này thường được kết hợp với lệnh `CMD`. Khi kết hợp, câu lệnh thực thi sẽ là `ENTRYPOINT + CMD`
- Cú pháp:

```Dockerfile
ENTRYPOINT ["executable", "param1", "param2"]
```

### Ví dụ 1:

```Dockerfile
FROM ubuntu
ENTRYPOINT ["echo"]
CMD ["Hello from Docker!"]
```

👉 Khi thực thi:

```bash
docker run my-image # Output: Hello from Docker!
docker run my-image "Custom message" # Output: Custom message
```

✅ Vì `ENTRYPOINT` là `echo`, còn `CMD` chỉ là tham số mặc định (`Hello from Docker!`) nếu không có gì được ghi đè.

### Ví dụ 2:

```Dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY script.py .

ENTRYPOINT ["python", "script.py"]
```

👉 Khi thực thi:

```bash
docker run my-image arg1 arg2
```

➡️ Docker sẽ thực hiện:

```bash
python script.py arg1 arg2
```

:::caution[Lưu ý]

- Nếu muốn ghi đè `ENTRYPOINT`, ta **phải dùng flag** `--entrypoint` khi chạy container.
- Trong một Dockerfile chỉ được có **1** `ENTRYPOINT` , dòng sau sẽ ghi đè dòng trước nếu có nhiều.

:::

## RUN

- Lệnh `RUN` trong Dockerfile dùng để **thực thi lệnh trong quá trình build image**, tức là lệnh đó **chạy tại thời điểm Docker build**, **không phải khi container chạy**.
- Dùng `RUN` khi:
  - Cài đặt phần mềm, package
  - Thiết lập môi trường
  - Biên dịch code
  - Dọn dẹp file tạm, cache
  - Tạo file, user, thư mục cần thiết
- Ví dụ:

```Dockerfile
FROM node:18

# Cài thêm curl và nano
RUN apt-get update && apt-get install -y curl nano

# Tạo thư mục ứng dụng
RUN mkdir /app
```

:::caution[Lưu ý]

- Mỗi lệnh `RUN` tạo ra **một layer mới** trong image → nên **gộp các lệnh** lại bằng `&&` để tối ưu kích thước image.

✅ Nên:

```Dockerfile
RUN apt update && apt install -y curl git && rm -rf /var/lib/apt/lists/*
```

❌ Không nên:

```Dockerfile
RUN apt update
RUN apt install -y curl
RUN apt install -y git
```

:::
