import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user.service';
import { User } from '../user/model/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}
    
      async validateUser(userId: string, password: string): Promise<any> {
          console.log("1");
        const user = await this.userService.findByUserId(userId);
        console.log(user);
        if (user && user.password === password) {
          const { password, ...result } = user;
          return result;
        }
        throw new UnauthorizedException();
      }
  
      async login(payload: User){
          const {userDeq,password,...thisUser} = await this.userService.findByUserId(payload.userId);
          if (thisUser && payload.password === password){
              return{
                access_token: this.jwtService.sign(thisUser), 
              }
          }
          throw new UnauthorizedException();
        // const payload = { name: user.name, userId: user.userId};
        // return {
        //   access_token: this.jwtService.sign(payload),
        // };
        // return "1";
      }

}
