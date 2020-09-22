import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt,Strategy } from 'passport-jwt';
import { jwtConstants } from 'src/config/jwtConstants';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any,done){
    console.log(done);
    if (!payload){
      throw new UnauthorizedException();
    }        
    return { userId: payload.userId, name: payload.name};
  }

}