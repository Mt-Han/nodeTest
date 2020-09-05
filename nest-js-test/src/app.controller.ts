import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/params/:param")
  getParam(
    @Param('param') param:string,
    @Query('query') query:string
  ): string {
    return this.appService.getParamQuery(param,query);
  }
}
