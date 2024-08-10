import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginUserDto) {
    const result = await this.userRepository.findOneBy({
      username: username,
    });

    if (!result) return;

    if (password === result.password) {
      const { password, ...user } = result;
      return await this.jwtService.signAsync(user);
    }
  }

  async register(registerUserDto: RegisterUserDto) {
    const user = new User(registerUserDto);
    return await this.entityManager.save(user);
  }
}
