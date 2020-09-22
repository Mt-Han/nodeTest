import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, Index } from 'typeorm';
import { BaseDt } from './baseDt.entity';
import { Role } from './role.entity';


@Entity({
  name: 'RoleStaff',
})
export class RoleStaff extends BaseDt {
  @PrimaryGeneratedColumn({ type: "bigint" })
  ROLE_STAFF_SEQ: number;

  @Column({ type: "bigint" ,nullable:true})
  STAFF_SEQ: number;

  @ManyToOne(type => Role, role => role.roleStaff)
  role: Role;

}
