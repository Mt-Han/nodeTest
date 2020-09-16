import { Controller, Get } from '@nestjs/common';

@Controller('pipe')
export class PipetestController {

    @Get()
    get():string {
        return "";
    }
}
