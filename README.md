# API HP Green Horizon

  [circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
  [circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">API Green Horizon HP - <a href="http://nodejs.org" target="_blank">Node.js</a> Rest API with <a href="https://github.com/nestjs/nest" target="_blank">NestJs</a>, Typescript, DDD, Clean Architecture and Automated Tests.
  <br>
  © Copyright 2024 HP Development Company, L.P. | Development by FIT - Flex Institute of Technology upon request from HP Brazil
  </p>
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
$ npm run generate:dev
```

```bash
# Rodar as migrations do Prisma
$ npm run migrate:dev
```

```bash
# Rodar o Seed para popular o banco com dados iniciais
$ npm run seed
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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil My�liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
