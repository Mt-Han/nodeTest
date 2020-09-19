import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntitysService } from './entitys/entitys.service';

@Injectable()
export class AppService {
  constructor(
    private entitysService:EntitysService
  ){

  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
