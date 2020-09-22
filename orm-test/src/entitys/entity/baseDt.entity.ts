import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from './role.entity';
import { type } from 'os';

export class BaseDt {

  @CreateDateColumn({ comment: "생성일자" })
  CREATE_DATE: Date;

  @UpdateDateColumn({ comment: "수정일자" })
  UPDATE_DATE: Date;

  @Column({ length: 255, comment: "수정자" ,nullable:false})
  UPDATE_USER: string;

  @Column({ length: 255, comment: "생성자" ,nullable:false})
  CREATE_USER: string;
}
