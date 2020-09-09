import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStractegy } from './locla.strategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStractegy]
})
export class AuthModule {}
