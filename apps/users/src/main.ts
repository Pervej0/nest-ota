import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { UsersAppModule } from './users-app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersAppModule, {
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  await app.listen();
}

bootstrap();
