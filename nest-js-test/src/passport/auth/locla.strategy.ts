
import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable,UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';



@Injectable()
export class LocalStractegy extends PassportStrategy(Strategy){
    constructor(private AuthService: AuthService){
        super();
    }

    async validate(username:string, password:string): Promise<any>{
        const user = await this.AuthService.validateUser(username, password);
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }

}