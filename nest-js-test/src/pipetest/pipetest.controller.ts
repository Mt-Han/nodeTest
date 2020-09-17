import { Controller, Get, Param, ParseIntPipe, HttpStatus, Post, Body } from '@nestjs/common';
import { UserValidationPipe } from 'src/pipe/user-validation.pipe';
import { UserDto } from 'src/user/dto/user.dto';

@Controller('pipe')
export class PipetestController {

    @Get(":id")
    get(@Param("id"
        // ,ParseIntPipe
        ,new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND}) // Status 변경 가능
    ) id:number ):string {
        return `result : ${id}`;
    }

    @Post()
    post(
        @Body(new UserValidationPipe()) userDto:UserDto
    ) : string {
        return `result : ${userDto}`; 
    }
}
