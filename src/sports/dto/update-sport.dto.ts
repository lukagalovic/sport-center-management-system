import { PartialType } from '@nestjs/mapped-types';
import { CreateSportDto } from './create-sport.dto';
import { ApiProperty } from '@nestjs/swagger';

// Properties are also added here just because of swagger descriptions
// When we use PartialType class does not inherit decorators
export class UpdateSportDto extends PartialType(CreateSportDto) {
  @ApiProperty({
    description: 'The name of the sport',
    example: 'Tennis',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'The description of the sport',
    example: 'A racket sport played on a grass or hard court.',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Is the sport currently available',
    example: false,
    required: false,
  })
  isAvailable?: boolean;
}
