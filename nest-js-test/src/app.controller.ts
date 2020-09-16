import { Controller, Get, Param, Query, UseGuards, Request, Post, Body, HttpStatus, HttpException, UseFilters, ParseIntPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { User } from './user/model/user.entity';
import { CustomException } from './exceoption/custom-exceoption';
import { HttpExceptionFilter } from './exceoption/http-exception.filter';


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
    @Request() req
    // @Param('param') param:string,
    // @Query('query') query:string
  ): string {
    return this.appService.getParamQuery(req.params['param'],req.query['query']);
    // return this.appService.getParamQuery(req.param,req.query);
  }

  @Get("/exception")
  @UseFilters(new HttpExceptionFilter())
  exception(){
    throw new HttpException("1",HttpStatus.BAD_REQUEST);
    return "test";
  }

  @Get("pipe/:id")
  pipeTest(
    @Param('id',ParseIntPipe) id:number
  ){
    id=this.appService.findOne(id);
    return id;
  }
}
