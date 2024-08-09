export class CreateSportDto {
  name: string;
  description: string | null;
  isAvailable: boolean;
  startDate: Date;
  endDate: Date;
}
