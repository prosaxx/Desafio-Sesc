import { AppModule } from './app.module';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor, HttpStatus, ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter, {
    // Prisma Error Code: HTTP Status Response
    P2000: HttpStatus.BAD_REQUEST,
    P2002: HttpStatus.CONFLICT,
    P2025: HttpStatus.NOT_FOUND,
  }));

  const description = "API Sesc";

  const config = new DocumentBuilder()
    .setTitle('API Sesc')
    .setDescription(description)
    .setVersion('1.0.0')
    .addBearerAuth()

    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document, {
    swaggerOptions: {
      apisSorter: 'alpha',
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    }
  });

  app.enableCors({
    origin: [
      'http://localhost:4200'      
    ],
    methods: ["GET", "POST", "DELETE", "PATCH", "UPDATE", "OPTIONS"],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();