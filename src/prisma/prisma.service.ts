import { Injectable } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config/dist';
import { PrismaClient } from '@prisma/client';
import { config } from 'process';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config:ConfigService){
        super({
           datasources:{
            db:{
                url:config.get('DATABASE_URL')
            }
           }
        })
    }
}
