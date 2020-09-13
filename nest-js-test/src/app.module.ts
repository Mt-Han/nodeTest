import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConstants } from './config/DBConstants';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: DatabaseConstants.DB_HOST,
    port: 3306,
    username: DatabaseConstants.DB_USER,
    password: DatabaseConstants.DB_PASSWORD,
    database: DatabaseConstants.DB_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
   AuthModule,
   ConfigModule.forRoot(),
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
