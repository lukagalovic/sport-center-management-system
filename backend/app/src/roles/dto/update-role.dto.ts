import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @ApiProperty({
    description: 'The name of the role',
    example: 'Admin or User',
  })
  name?: string;

  @ApiProperty({
    description: 'The description of the role',
    example: 'The admin acts as a super-user',
  })
  description?: string | null;
}
