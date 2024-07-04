import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: [/localhost/], methods: ['GET', 'POST', 'DELETE'] },
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.SERVER_PORT);
}

bootstrap();
