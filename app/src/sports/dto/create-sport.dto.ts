import { ApiProperty } from '@nestjs/swagger';

export class CreateSportDto {
  @ApiProperty({
    description: 'The name of the sport',
    example: 'Football',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the sport',
    example: 'The sport that is played with 11 players on each side',
  })
  description: string | null;

  @ApiProperty({
    description: 'Is currently sport available ',
    example: true,
  })
  isAvailable: boolean;
}
