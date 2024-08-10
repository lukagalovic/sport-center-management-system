import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    description: 'The name of the role',
    example: 'Admin or User',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the role',
    example: 'The admin acts as a super-user',
  })
  description: string | null;
}
