import { EntityRepository, Repository } from "typeorm";
import { User } from '../user.entity';

/**
 * Data Mapper 패턴
 * 유지보수 효과적
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findByEmail(email:string){
        return this.createQueryBuilder("user")
            .where("user.email = :email",{email})
            .getMany();
    }
    findByUserId(userId:string){
        return this.createQueryBuilder("user")
        .where("user.userId = :userId",{userId})
        .getOne();
    }

}