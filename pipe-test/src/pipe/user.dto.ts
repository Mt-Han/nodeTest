import { IsInt, IsString } from 'class-validator';
import { isNull } from 'util';

export class UserClass {

  @IsString()
  name:string;
  @IsInt()
  age:number;
  @IsInt()
  hp:number;
  @IsString()
  id:string;
}
