import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository, getRepository, Connection, getConnection, DeleteResult } from 'typeorm';
import { UserRepository } from '../model/repository/userRepository';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    // connection 사용
    // private connection : Connection
  ) {}
  async findByEmail(email:string):Promise<User[]>{
    const user = await this.userRepository.findByEmail("mail");
    // connection 사용
    // const user = await this.connection.getCustomRepository(UserRepository).findByEmail("mail");
    return user;
  }
  async getAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async insertUser(body:User): Promise<User>{
    // console.log(body);
    // let user = new User();
    // user.email = body.email;
    // user.name = body.name;
    // user.password = body.password;
    // user.phone = body.phone;
    // user.userId = body.userId;
    await this.userRepository.save(body);
    return body;
  }
  async updateUser(body:User):Promise<User>{
    // Active Record
    // let user = User.findByUserId(userId);
    // data mapper
    let user = await this.userRepository.findByUserId(body.userId);
    user.name = body.name;
    this.userRepository.save(user);
    return user;
  }

  async deleteUser(body:User):Promise<DeleteResult>{
    const user = await this.userRepository.findByUserId(body.userId);
    return this.userRepository.delete(user);
  }


}
