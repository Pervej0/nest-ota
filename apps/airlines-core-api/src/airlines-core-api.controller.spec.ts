import { Test, TestingModule } from '@nestjs/testing';
import { AirlinesCoreApiController } from './airlines-core-api.controller';
import { AirlinesCoreApiService } from './airlines-core-api.service';

describe('AirlinesCoreApiController', () => {
  let airlinesCoreApiController: AirlinesCoreApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AirlinesCoreApiController],
      providers: [AirlinesCoreApiService],
    }).compile();

    airlinesCoreApiController = app.get<AirlinesCoreApiController>(AirlinesCoreApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(airlinesCoreApiController.getHello()).toBe('Hello World!');
    });
  });
});
