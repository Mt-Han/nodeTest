import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EntitysService } from './entitys/entitys.service';
import { Role } from './entitys/entity/account_role.entity';

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
    const role = new Role();
    // role.ROLE_NAME="testname";
    this.entityService.test(role);
    return "success";
  }
}
