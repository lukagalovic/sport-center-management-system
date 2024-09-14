import {
  Controller,
  Post,
  Body,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalGuard } from './guards/local.guard';
import { User } from 'src/users/entities/user.entity';

@ApiTags('Auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: 201,
    description: 'Created',
    schema: {
      example: {
        message: 'Created',
        statusCode: 201,
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict',
    schema: {
      example: {
        message: 'A user with the same username or email already exists.',
        error: 'Conflict',
        statusCode: 409,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal server error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.register(registerUserDto);
  }

  @Post('login')
  @UseGuards(LocalGuard)
  @ApiResponse({
    status: 201,
    description: 'Created',
    schema: {
      example: {
        message: 'Bearer token',
        statusCode: 201,
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        message: 'Unauthorized',
        statusCode: 401,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        message: 'Internal server error',
        error: 'Internal Server Error',
        statusCode: 500,
      },
    },
  })
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = new User(await this.authService.validateUser(loginUserDto));
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return await this.authService.login(user);
  }
}
