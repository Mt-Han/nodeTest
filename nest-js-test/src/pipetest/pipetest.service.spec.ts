import { Test, TestingModule } from '@nestjs/testing';
import { PipetestService } from './pipetest.service';

describe('PipetestService', () => {
  let service: PipetestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipetestService],
    }).compile();

    service = module.get<PipetestService>(PipetestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
