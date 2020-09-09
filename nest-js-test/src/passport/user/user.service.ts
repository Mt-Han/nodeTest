import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
    private readonly users: User[];
  
    constructor() {
      this.users = [
        {
          userId: 1,
          username: 'a1',
          password: 'a1',
        },
        {
          userId: 2,
          username: 'a2',
          password: 'a2',
        },
        {
          userId: 3,
          username: 'a3',
          password: 'a3',
        },
      ];
    }
  
    async findOne(username: string): Promise<User | undefined> {
      return this.users.find(user => user.username === username);
    }
  }