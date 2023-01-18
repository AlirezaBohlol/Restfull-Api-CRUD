import { Controller, Get, UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('users')
export class UserController {
    constructor() { }
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    me(@Req() req:Request){

        return req.user
    }


}
