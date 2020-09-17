import { Controller, Get, Param, ParseIntPipe, HttpStatus, UsePipes, Body, Post, ValidationPipe } from '@nestjs/common';
import { UserClass } from './user.dto';
import { TestValidationPipe } from './validation.pipe';

@Controller('pipe')
export class PipeController {
    @Post()
    getPipe(@Body(new TestValidationPipe()) id:UserClass){
        return id;
    }
}
