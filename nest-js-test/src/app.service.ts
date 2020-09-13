import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/model/user.entity';



@Injectable()
export class AppService {
  constructor(
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>
  ) {}
  getHello(): string {
    return 'Hello World! (GetController)';
  }
  getParamQuery(str1:string,str2:string): string {
    return `Param: ${str1}, Query:${str2} (GetController)`;
  }
  // getTest():string{
  //   return "Hi i'm test";
  // }
  // async getAllUser(): Promise<User[]> {
  //   return await this.userRepository.find();
  // }
  // async insertUser(body:User): Promise<string>{
  //   console.log(body);
  //   let user = new User();
  //   user.email = body.email;
  //   user.name = body.name;
  //   user.password = body.password;
  //   user.phone = body.phone;
  //   user.userId = body.userId;
  //   await this.userRepository.save(user);
  //   return 'success';
  // }
}
