import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, Index } from 'typeorm';
import { BaseEntity } from './baseEntity.entity';
import { Role } from './account_role.entity';


@Entity({
  name: 'ACCOUNT_STAFF_ROLE_TB',
})
export class RoleStaff extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  ROLE_STAFF_SEQ: number;

  @Column({ type: "bigint" ,nullable:true})
  STAFF_SEQ: number;

  @ManyToOne(type => Role, role => role.roleStaff)
  role: Role;

}
