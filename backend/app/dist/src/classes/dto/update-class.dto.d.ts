import { CreateClassDto } from './create-class.dto';
import { Sport } from 'src/sports/entities/sport.entity';
declare const UpdateClassDto_base: import("@nestjs/common").Type<Partial<CreateClassDto>>;
export declare class UpdateClassDto extends UpdateClassDto_base {
    name?: string;
    description?: string | null;
    isAvailable?: boolean;
    startDate?: Date;
    endDate?: Date;
    schedule: {
        day: string;
        time: string;
    }[];
    sport?: Sport;
}
export {};
