import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EntitysService } from './entitys/entitys.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly entityService:EntitysService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  post(): string {
    this.entityService.test();
    return "success";
  }
}
