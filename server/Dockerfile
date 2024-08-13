FROM node:20-alpine as builder

WORKDIR /app

RUN npm i -g pnpm

COPY . .

RUN pnpm install && pnpm run build

EXPOSE 8080

CMD ["node", "index.js"]
