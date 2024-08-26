FROM node:20-alpine as builder

WORKDIR /app

RUN npm i -g pnpm
RUN apk add --no-cache sqlite

COPY . .

RUN pnpm install && pnpm run build

# Create sample data
RUN sqlite3 /app/db.sqlite < /app/init.sql 

EXPOSE 8080

CMD ["node", "index.js"]
