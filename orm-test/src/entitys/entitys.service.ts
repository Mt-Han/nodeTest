import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entity/role.entity';


@Injectable()
export class EntitysService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ){}

    async test(){
        const role= new Role();
        role.CREATE_USER="test";
        this.roleRepository.save(role);
    }
}
