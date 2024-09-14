import { Sport } from 'src/sports/entities/sport.entity';
export declare class CreateClassDto {
    name: string;
    description: string | null;
    startDate: Date;
    endDate: Date;
    schedule: {
        day: string;
        time: string;
    }[];
    sport: Sport;
}
