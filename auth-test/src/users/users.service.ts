import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'test1',
        password: '1234',
      },
      {
        userId: 2,
        username: 'a1',
        password: 'a1',
      },
      {
        userId: 3,
        username: 'a2',
        password: 'a2',
      },
    ];
  }
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}