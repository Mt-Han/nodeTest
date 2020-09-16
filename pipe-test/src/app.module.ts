import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipeModule } from './pipe/pipe.module';

@Module({
  imports: [PipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
