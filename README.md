# Early Launch

## Description

Early Launch is an open-source project that is developed to help you easily set up a webpage for collecting email addresses. The goal is to make it super simple for you to create a launch list for any project or product you're working on.

## Client

### Stack

- Angular
- Tailwind
- Pnpm

### Run the project with Docker

```bash
docker compose up
```

### Run the client Docker container individually

```bash
cd client
docker build -t early-launch-client .
docker run -p 4200:80 early-launch-client
```

### Run the server Docker container individually

```bash
cd server
docker build -t early-launch-server .
docker run -p 8080:8080 early-launch-server
```
