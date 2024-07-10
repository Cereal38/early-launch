# ;---------------;
# ; Build stage   ;
# ;---------------;
FROM node:20-alpine as builder

WORKDIR /app

RUN npm i -g pnpm

COPY . .

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile && \
    pnpm run build

# ;----------------;
# ; Runtime stage  ;
# ;----------------;
FROM node:20-alpine as runtime

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 8080

CMD ["node", "index.js"]
