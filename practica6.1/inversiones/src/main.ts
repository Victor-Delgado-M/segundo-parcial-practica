import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Establecer prefijo para las rutas
  app.setGlobalPrefix('api');

  // Validación global de datos de entrada
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

