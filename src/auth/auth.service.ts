import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  login(loginUserDto: LoginUserDto) {
    return 'This action adds a new auth';
  }

  register(registerUserDto: RegisterUserDto) {
    return 'This action adds a new auth';
  }
}
