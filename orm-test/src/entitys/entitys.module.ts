import { Module } from '@nestjs/common';
import { EntitysService } from './entitys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entity/account_role.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    providers: [EntitysService],
    exports: [EntitysService]
})
export class EntitysModule {}
