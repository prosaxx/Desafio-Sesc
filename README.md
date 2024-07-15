# Sesc desafio

# Backend

## Download

- [Node.js](https://nodejs.org/en/download/package-manager) @version 20.9.0
- [Docker WSL2](https://github.com/codeedu/wsl2-docker-quickstart) @version latest

## Installation

```bash
# Pelo terminal navegue até a pasta backend
$ cd backend
```

```bash
# Instalar CLI do Nestjs
$ npm install -g @nestjs/cli
```

```bash
# Instalar as Libs
$ npm install
```

```bash
# Subir o docker
$ docker-compose up -d
```

```bash
# Gerar o schema do Prisma
$ npx prisma generate
```

```bash
# Rodar as migrations do Prisma
$ npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```bash
# No navegador acesse a rota
$ localhost:3000/api/v1
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Frontend

## Installation

```bash
# Pelo terminal navegue até a pasta frontend
$ cd frontedn
```

```bash
# Instalar as Libs
$ npm install
```

```bash
# Rode a aplicação frontend
$ npm run start
```


```bash
# No navegador acesse a rota
$ localhost:4200
```
