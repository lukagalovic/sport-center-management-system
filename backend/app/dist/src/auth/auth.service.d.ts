import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    validateUser({ username, password }: LoginUserDto): Promise<{
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        role: import("../roles/entities/role.entity").Role;
        classes: import("../classes/entities/class.entity").Class[];
        id: number;
    }>;
    login(user: User): Promise<string>;
    register(registerUserDto: RegisterUserDto): Promise<User>;
}
