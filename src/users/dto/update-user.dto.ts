import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Role } from 'src/roles/entities/role.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'First name of the user',
    example: 'Ivan',
  })
  firstName?: string;

  @ApiProperty({
    description: 'Last name of the user',
    example: 'Ivic',
  })
  lastName?: string;

  @ApiProperty({
    description: 'Email address of the user ',
    example: 'ivan.ivic@gmail.com',
  })
  email?: string;

  @ApiProperty({
    description: 'Password of the user ',
    example: 'secretKey',
  })
  password?: string;

  @ApiProperty({
    description: 'The role of user.',
    type: Role,
    example: '{"id": 1}',
    required: true,
  })
  role?: Role;
}
