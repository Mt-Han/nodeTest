import { IsString, IsEmail } from "class-validator";

export class UserDto{

    @IsString()
    userId: string;

    @IsString()
    password: string;
  
    @IsString()
    name: string;
  
    @IsString()
    phone: string;

    @IsEmail()
    email: string
}