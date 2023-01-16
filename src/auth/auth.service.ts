import { Injectable } from "@nestjs/common";
import { AuthDTO } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon2 from 'argon2'
import { PrismaClientExtensionError, PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { ForbiddenException } from "@nestjs/common/exceptions";
// import * as argonService from "services/argon2";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }

    async signUp(dto: AuthDTO) {
        // generate the password hash 
        const hash = await argon2.hash(dto.password)

        try {
            // save the new user in the db
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                }
            })
            delete user.hash
            // return the save user
            return user

        } catch (error) {
           if(error instanceof PrismaClientKnownRequestError){
            if(error.code==='P2002'){
                throw new ForbiddenException('Credentials taken')
            }
           }
           throw error
        }
    }

    signIn() {
        return 'hello'
    }
}
