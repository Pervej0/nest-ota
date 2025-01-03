import { Module } from '@nestjs/common';
import { AirlinesCoreApiController } from './airlines-core-api.controller';
import { AirlinesCoreApiService } from './airlines-core-api.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AirlinesCoreApiController],
  providers: [AirlinesCoreApiService],
})
export class AirlinesCoreApiModule {}
