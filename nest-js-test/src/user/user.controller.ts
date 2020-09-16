
import { Controller, Get, Post, Query, Body, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { User } from './model/user.entity';
import { UserService } from './service/user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller("/user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    ) {}

  @UseGuards(JwtAuthGuard)
  @Get("/list")
  getTest(): Promise<User[]> {
    return this.userService.getAllUser();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/repo")
  findEmail(
    @Query("email") email:string
  ): Promise<User[]>{
    return this.userService.findByEmail(email);
  }
  
  @Post("/insert")
  insertUser(
    @Body() body
  ): Promise<User>{
    return this.userService.insertUser(body);
  }
  
  @UseGuards(JwtAuthGuard)
  @Put("/update")
  updateUser(
    @Body() body
  ): Promise<User>{
    return this.userService.updateUser(body);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete("/delete")
  deleteUser(
    @Body() body
  ): Promise<any>{
    return this.userService.deleteUser(body);
  }

}
