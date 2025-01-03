import { Controller, Get } from '@nestjs/common';
import { AirlinesCoreApiService } from './airlines-core-api.service';

@Controller()
export class AirlinesCoreApiController {
  constructor(
    private readonly airlinesCoreApiService: AirlinesCoreApiService,
  ) {}

  @Get()
  getHello(): string {
    return this.airlinesCoreApiService.getHello();
  }
}
