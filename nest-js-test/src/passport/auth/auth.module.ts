import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStractegy } from './locla.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UserModule,
  PassportModule.register({defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),
  ],
  providers: [AuthService, LocalStractegy,JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
