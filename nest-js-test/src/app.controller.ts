import { Controller, Get, Param, Query, UseGuards, Request, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './passport/auth/local-auth.guard';
// import { AuthService } from './passport/auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { User } from './user/model/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
    ) {}
    
  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post("/login")
  login(
    @Body() user:User
  ){
    return this.authService.login(user);
  }

  @Get("/params/:param")
  getParam(
    @Param('param') param:string,
    @Query('query') query:string
  ): string {
    return this.appService.getParamQuery(param,query);
  }
}
