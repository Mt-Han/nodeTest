import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entity/account_role.entity';



@Injectable()
export class EntitysService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ){}

    async test(role: Role){
        role.CREATE_USER="test";
        console.log(role);
        this.roleRepository.save(role);
    }
}
