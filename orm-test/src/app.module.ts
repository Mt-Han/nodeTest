import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitysModule } from './entitys/entitys.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'orm',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), EntitysModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
