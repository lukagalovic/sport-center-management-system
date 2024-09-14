import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

describe('AuthService', () => {
  let authService: AuthService;
  let userRepository: Repository<User>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(jwtService).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return user data (excluding password) if validation succeeds', async () => {
      const user = {
        id: 1,
        username: 'test',
        password: 'password',
        role: { name: 'user' },
      } as User;
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(user);

      const result = await authService.validateUser({
        username: 'test',
        password: 'password',
      });

      expect(result).toEqual({
        id: 1,
        username: 'test',
        role: { name: 'user' },
      });
    });

    it('should return undefined if user is not found', async () => {
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

      const result = await authService.validateUser({
        username: 'nonexistent',
        password: 'password',
      });

      expect(result).toBeUndefined();
    });

    it('should return undefined if password does not match', async () => {
      const user = {
        id: 1,
        username: 'test',
        password: 'password',
        role: { name: 'user' },
      } as User;
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(user);

      const result = await authService.validateUser({
        username: 'test',
        password: 'wrongpassword',
      });

      expect(result).toBeUndefined();
    });
  });
});
