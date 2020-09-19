import { Module } from '@nestjs/common';
import { EntitysService } from './entitys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [EntitysService],
    exports: [EntitysService]
})
export class EntitysModule {}
