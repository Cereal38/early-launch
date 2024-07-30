# Early Launch

## Description

Early Launch is an open-source project that is developed to help you easily set up a webpage for collecting email addresses. The goal is to make it super simple for you to create a launch list for any project or product you're working on.

## Client

### Stack

- Angular
- Tailwind
- Pnpm

### Run the project with Docker (Production)

```bash
pnpm install
docker compose -f docker-compose.prod.yml up -d
```

### Run the project with Docker (Development)

```bash
docker compose -f docker-compose.dev.yml up --build
```
