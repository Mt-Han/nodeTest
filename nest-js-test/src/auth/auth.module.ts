import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/user/service/user.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [  UserModule,
    JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '3600s'},
  }),PassportModule],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
