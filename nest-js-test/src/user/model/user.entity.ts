import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, Index, } from 'typeorm';

@Entity()
@Index(['userId','email'])
export class User{

    @PrimaryGeneratedColumn()
    userDeq: number;

    @Column({ length: 40, unique: true })
    userId: string;
  
    @Column({ length: 256, nullable: false })
    password: string;
  
    @Column({ length: 40 })
    name: string;
  
    @Column({ length: 12 })
    phone: string;
  
    @Column({ length: 40, unique: true })
    email: string

    @Column({ length: 12 })
    role: string;
    
    /**
     * Active Record
     * 사용이 간편
     * extends baseEntity 사용해야함
     */
    
    // static findByUserId(userId:string){
    //     return this.createQueryBuilder("user")
    //     .where("user.userId = :userId",{userId})
    //     .getOne();
    // }
    


}