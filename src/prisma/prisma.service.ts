import { Injectable } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
           datasources:{
            db:{
                url:'postgresql://postgres:123@localhost:5434/nest?schema=public'
            }
           }
        })
    }
}
