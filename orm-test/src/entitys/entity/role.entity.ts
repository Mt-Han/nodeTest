import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseDt } from './baseDt.entity';
import { type } from 'os';
import { RoleStaff } from './roleStaff.entity';


@Entity({
  name: 'Role',
})
export class Role extends BaseDt {
  @PrimaryGeneratedColumn({ type: "bigint" })
  ROLE_SEQ: number;

  // @Column({ length: 255 })
  // CREATE_USER: string;

  // @Column()
  // CREATE_DATE: Date;

  // @Column()
  // UPDATE_DATE: Date;

  // @Column({ length: 255 })
  // UPDATE_USER: string;

  @Column({ length: 255 })
  ROLE_NAME: string;

  @Column({ length: 100 })
  ROLE_CODE: string;

  @OneToMany(type => RoleStaff, roleStaff => roleStaff.role)
  roleStaff: RoleStaff[];

}
