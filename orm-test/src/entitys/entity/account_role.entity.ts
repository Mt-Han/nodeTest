import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './baseEntity.entity';
import { type } from 'os';
import { RoleStaff } from './account_staff_role.entity';


@Entity({
  name: 'ACCOUNT_ROLE_TB',
})
export class Role extends BaseEntity {
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
  ROLE_NAME: string = null;

  @Column({ length: 100 })
  ROLE_CODE: string;

  @OneToMany(type => RoleStaff, roleStaff => roleStaff.role)
  roleStaff: RoleStaff[];

}
