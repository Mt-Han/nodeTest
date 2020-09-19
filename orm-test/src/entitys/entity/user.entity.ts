import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;
}

export class UserFillableFields {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
