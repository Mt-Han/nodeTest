import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomException extends HttpException {
    constructor(str:string,status:HttpStatus) {
        super(str,status);
    }
}