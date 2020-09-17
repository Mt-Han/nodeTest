import { Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { UserClass } from './pipe/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getPost(): string {
    return "";
  }

}
