import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AdminStrategy } from './admin.strategy';
import { jwtConstants } from 'src/config/jwtConstants';

@Module({
  imports: [  UserModule,
    JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '3600s'},
  }),PassportModule],
  providers: [AuthService,JwtStrategy,AdminStrategy],
  exports: [AuthService]
})
export class AuthModule {}
