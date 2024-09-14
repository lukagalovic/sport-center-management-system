import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/users/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<string>;
}
