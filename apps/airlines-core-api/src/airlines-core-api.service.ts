import { Injectable } from '@nestjs/common';

@Injectable()
export class AirlinesCoreApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
