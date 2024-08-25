import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/entities/role.entity';

export class RegisterUserDto {
  @ApiProperty({
    description: 'First name of the user',
    example: 'Ivan',
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    example: 'Ivic',
  })
  lastName: string;

  @ApiProperty({
    description: 'Username of user',
    example: 'iivic',
  })
  username: string;

  @ApiProperty({
    description: 'Email address of the user ',
    example: 'ivan.ivic@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'Password of the user ',
    example: 'secretKey',
  })
  password: string;

  @ApiProperty({
    description: 'The role of user.',
    example: '{"id": 1}',
    type: Role,
  })
  role: Role;
}
