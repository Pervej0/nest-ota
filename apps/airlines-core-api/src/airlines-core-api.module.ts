import { Module } from '@nestjs/common';
import { AirlinesCoreApiController } from './airlines-core-api.controller';
import { AirlinesCoreApiService } from './airlines-core-api.service';

@Module({
  imports: [],
  controllers: [AirlinesCoreApiController],
  providers: [AirlinesCoreApiService],
})
export class AirlinesCoreApiModule {}
