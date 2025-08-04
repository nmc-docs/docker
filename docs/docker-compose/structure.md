---
sidebar_position: 2
---

# Cấu trúc cơ bản của file Docker Compose

```yaml
version: "3.8"

services:
  chat_server:
    depends_on:
      - mysql_server
      - redis_server
    container_name: chat_server
    restart: always
    build:
      context: ../../ # Tính từ vị trí của file docker-compose.yaml
      dockerfile: docker/prod/Dockerfile # Tính từ thư mục context như đã cấu hình cấu hình ở dòng trên
    environment:
      - NODE_ENV=production
    env_file: .env.prod # Tính từ vị trí của file docker-compose.yaml
    networks:
      - web_chat_networks
    stdin_open: true
    tty: true
    ports:
      - "8000:8080"

  mysql_server:
    image: mysql:latest
    container_name: mysql_server
    restart: always
    environment:
      - MYSQL_DATABASE=${MYSQL_DATABASE_NAME}
      - MYSQL_ROOT_PASSWORD=${MYSQL_PASSWORD}
    ports:
      - ${MYSQL_LOCAL_PORT}:${MYSQL_DOCKER_PORT}
    volumes:
      - ./data/mysql:/var/lib/mysql # Path tính từ vị trí của file docker-compose.yaml
    networks:
      - web_chat_networks

  redis_server:
    image: redis:7.2-alpine
    command: redis-server --requirepass ${REDIS_PASSWORD}
    container_name: redis_server
    restart: always
    ports:
      - ${REDIS_LOCAL_PORT}:${REDIS_DOCKER_PORT}
    volumes:
      - redis-data:/data
    networks:
      - web_chat_networks

networks:
  web_chat_networks:
    driver: bridge
```

:::note

- Ta có thể hoặc chỉ định riêng lẻ từng biến môi trường thông qua `environment` hoặc chỉ định đường dẫn file .env chứa tất cả các biến môi trường trong quá trình run container (run time) thông qua `env_file`.
- Biến môi trường mà ta cấu hình trong từng services chính **là các biến môi trường sẽ được inject khi ta CHẠY container (run time), chứ không phải trong quá trình build image (build time như các ứng dụng ReactJs, VueJS,...).**. Nó phù hợp khi service là môi trường server NodeJS, chứ không phù hợp với môi trường client-side (ReactJS, VueJS), nơi mà biến môi trường phải được inject trong quá trình build image.
- Nếu ta muốn sử dụng biến môi trường trong khi build các ứng dụng front-end (ReactJS, VueJS), hãy sử dụng [ARG](../reference/docker-file#kết-hợp-với-env), vì nó sẽ được inject tại thời điểm build image, chứ không phải khi run container (image đã được build rồi). Lúc này file docker compose của ta sẽ có dạng như:

```yaml
services:
  web_chat_client:
    container_name: web_chat_client
    build:
      context: ../../
      dockerfile: docker/prod/Dockerfile
      args:
        - VITE_API_URL=http://localhost:3001
        - VITE_SOCKET_URL=http://localhost:3001
    ports:
      - "3000:3000"
    restart: unless-stopped
```

:::
