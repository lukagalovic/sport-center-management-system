import { ConflictException, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginUserDto) {
    const user = await this.userRepository.findOne({
      where: { username },
      relations: ['role'],
    });

    if (!user || user.password !== password) return;

    const { password: _, ...userData } = user;
    return userData;
  }

  async login(user: User) {
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role.name,
    };

    return await this.jwtService.signAsync(payload);
  }

  async register(registerUserDto: RegisterUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: [
        { username: registerUserDto.username },
        { email: registerUserDto.email },
      ],
    });

    if (existingUser)
      throw new ConflictException(
        'A user with the same username or email already exists.',
      );

    const user = this.userRepository.create(registerUserDto);
    return await this.userRepository.save(user);
  }
}
