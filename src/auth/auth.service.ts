import { ConflictException, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
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

    // if (!result) return;

    // if (password === result.password) {
    //   const { password, ...user } = result;
    //   return await this.jwtService.signAsync(user);
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

    const user = this.entityManager.create(User, registerUserDto);
    return await this.entityManager.save(user);
  }
}
