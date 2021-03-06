import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConstants } from './config/DBConstants';
import { PipetestModule } from './pipetest/pipetest.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: DatabaseConstants.DB_HOST,
    port: DatabaseConstants.DB_PORT,
    username: DatabaseConstants.DB_USER,
    password: DatabaseConstants.DB_PASSWORD,
    database: DatabaseConstants.DB_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
   AuthModule,
   ConfigModule.forRoot(),
   PipetestModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
