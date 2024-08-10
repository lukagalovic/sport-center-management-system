import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClassDto } from './create-class.dto';
import { Sport } from 'src/sports/entities/sport.entity';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @ApiProperty({
    description: 'The name of the class',
    example: 'Beginner Basketball Training',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'A brief description of the class',
    example: 'A training session for beginners with a focus on basic skills.',
    required: false,
  })
  description?: string | null;

  @ApiProperty({
    description: 'Indicates if the class is currently available',
    example: false,
  })
  isAvailable?: boolean;

  @ApiProperty({
    description: 'The start date of the class',
    example: '2024-10-01',
    type: String,
  })
  startDate?: Date;

  @ApiProperty({
    description: 'The end date of the class',
    example: '2024-10-01',
    type: String,
    required: false,
  })
  endDate?: Date;

  @ApiProperty({
    description: 'The week schedule of class',
    example: [
      { day: 'Monday', time: '18:00' },
      { day: 'Friday', time: '15:00' },
    ],
  })
  schedule: { day: string; time: string }[];

  @ApiProperty({
    description: 'The sport associated with the class',
    type: Sport,
    example: '{"id": 1}',
    required: true,
  })
  sport?: Sport;
}
