import { Controller, Post } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { AuthDTO } from "src/auth/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    signUp(@Body() dto: AuthDTO) {
        return this.authService.signUp(dto)
    }

    @Post('signin')
    signIn(@Body() dto: AuthDTO) {
        return this.authService.signIn(dto)
    }
}