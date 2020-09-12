import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './model/user.entity';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserRepository } from './model/repository/userRepository';
import { AuthModule } from './passport/auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),PassportModule.register({defaultStrategy: 'jwt' }),
  TypeOrmModule.forFeature([UserRepository])
  ,AuthModule],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
