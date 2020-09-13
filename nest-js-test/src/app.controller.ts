import { Controller, Get, Param, Query, UseGuards, Request, Post, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { User } from './user/model/user.entity';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private configService: ConfigService
    ) {}
    
  @Get()
  getHello() {
    console.log(this.configService.get("HOST_URL"));
    return this.appService.getHello();
  }

  @Post("/login")
  login(
    @Body() user:User
  ){
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard('admin'))
  @Get("/params/:param")
  getParam(
    @Param('param') param:string,
    @Query('query') query:string
  ): string {
    return this.appService.getParamQuery(param,query);
  }
}
