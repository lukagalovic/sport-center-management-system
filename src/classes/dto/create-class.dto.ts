import { ApiProperty } from '@nestjs/swagger';
import { Sport } from 'src/sports/entities/sport.entity';

export class CreateClassDto {
  @ApiProperty({
    description: 'The name of the class',
    example: 'Advanced Basketball Training',
  })
  name: string;

  @ApiProperty({
    description: 'A brief description of the class',
    example:
      'A high-intensity basketball training session focusing on advanced techniques.',
    required: false,
  })
  description: string | null;

  @ApiProperty({
    description: 'The start date of the class',
    example: '2024-09-01',
    type: String,
  })
  startDate: Date;

  @ApiProperty({
    description: 'The end date of the class',
    example: '2024-09-01',
    type: String,
  })
  endDate: Date;

  @ApiProperty({
    description: 'The sport that is taught in the class',
    type: Sport,
  })
  sport: Sport;
}
