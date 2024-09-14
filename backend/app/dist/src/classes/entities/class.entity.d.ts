import { AbstractEntity } from 'src/database/abstract.entity';
import { Sport } from 'src/sports/entities/sport.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Class extends AbstractEntity<Class> {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    schedule: {
        day: string;
        time: string;
    }[];
    sport: Sport;
    users: User[];
    calculateDuration(): void;
}
