import { Controller, Get, Param, ParseIntPipe, HttpStatus, UsePipes, Body, Post } from '@nestjs/common';
import { UserClass } from './user.dto';

@Controller('pipe')
export class PipeController {
    @Post()
    getPipe(@Body() id:UserClass){
        return id;
    }
}
