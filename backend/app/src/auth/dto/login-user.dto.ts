import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'Username of the user',
    example: 'llukic',
  })
  username: string;

  @ApiProperty({
    description: 'Password of the user',
    example: 'secretKey',
  })
  password: string;
}
