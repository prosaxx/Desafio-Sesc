# API Sesc test
# Banckend
  [circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
  [circleci-url]: https://circleci.com/gh/nestjs/nest
  
  <p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
  </p>

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
$ cd backend
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
