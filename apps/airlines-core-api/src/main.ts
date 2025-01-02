import { NestFactory } from '@nestjs/core';
import { AirlinesCoreApiModule } from './airlines-core-api.module';

async function bootstrap() {
  const app = await NestFactory.create(AirlinesCoreApiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
