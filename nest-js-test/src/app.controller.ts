import { Controller, Get, Param, Query, UseGuards, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './passport/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post("/pass")
  login(@Request() req){
    return req.user;
  }

  @Get("/params/:param")
  getParam(
    @Param('param') param:string,
    @Query('query') query:string
  ): string {
    return this.appService.getParamQuery(param,query);
  }
}
