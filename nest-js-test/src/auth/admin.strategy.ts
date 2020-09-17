import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt,Strategy } from 'passport-jwt';
import { jwtConstants } from 'src/config/jwtConstants';
import { UserService } from 'src/user/service/user.service';


@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy,'admin') { //네이밍 커스텀 가능
  constructor(
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any){
    if(payload){
      const user = await this.userService.findByUserId(payload.userId);
      if(user || user.role === "admin"){
        return { userId: payload.userId, name: payload.name};    
      }
    }
      throw new UnauthorizedException();
    // if (!payload || payload.role!="admin"){
    //   throw new UnauthorizedException();
    // }        
    // return { userId: payload.userId, name: payload.name};
  }
}