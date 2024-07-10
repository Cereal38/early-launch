# Early Launch

## Description

Early Launch is an open-source project that is developed to help you easily set up a webpage for collecting email addresses. The goal is to make it super simple for you to create a launch list for any project or product you're working on.

## Client

### Stack

- Angular
- Tailwind
- Pnpm

### Start the project

```bash
cd client
pnpm install
pnpm start
```

### Start the client Docker container individually

```bash
cd client
docker build -t early-launch-client .
docker run -p 4200:80 early-launch-client
```
