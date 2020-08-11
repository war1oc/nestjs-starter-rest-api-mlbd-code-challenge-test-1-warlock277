import { Test, TestingModule } from '@nestjs/testing';
import { AppLogger } from './logger.service';

describe('AppLogger', () => {
  let service: AppLogger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppLogger],
    }).compile();
    service = await module.resolve(AppLogger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});