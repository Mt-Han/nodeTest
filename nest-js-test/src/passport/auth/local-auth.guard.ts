
import {Strategy} from 'passport-local';
import {PassportStrategy, AuthGuard} from '@nestjs/passport';
import {Injectable,UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';



@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){ }