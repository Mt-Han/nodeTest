import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseDt } from './baseDt.entity';
import { type } from 'os';
import { RoleStaff } from './roleStaff.entity';


@Entity({
  name: 'Staff',
})
export class Staff extends BaseDt {

  @PrimaryGeneratedColumn({ type: "bigint" })
  STAFF_SEQ: number;

  @Column({ length: 255, comment: "직급" })
  STAFF_POSITION: string;

  @Column({ length: 255, comment: "직원명" })
  STAFF_NAME: string;

  @Column({ length: 255, comment: "이메일" })
  STAFF_EMAIL: string;

  @Column({ length: 255, comment: "아이디" })
  STAFF_ID: string;

  @Column({ length: 255, comment: "비밀번호" ,nullable:false})
  STAFF_PASSWORD: string;

  @Column({ type: "bigint", comment: "메뉴 권한 번호" })
  MENU_AUTH_SEQ: number;

  @Column({ type: "bigint", comment: "팀 번호", nullable: false})
  TEAM_SEQ: number;

  @Column({ length: 255, comment: "직원 구분" })
  STAFF_TYPE: string;

  @Column({ length: 255, comment: "Field" })
  Field: string;
}
