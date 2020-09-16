import { Module } from '@nestjs/common';
import { PipetestService } from './pipetest.service';
import { PipetestController } from './pipetest.controller';

@Module({
  providers: [PipetestService],
  controllers: [PipetestController],
})
export class PipetestModule {}
