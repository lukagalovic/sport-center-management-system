import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
export declare class SportsController {
    private readonly sportsService;
    constructor(sportsService: SportsService);
    create(createSportDto: CreateSportDto): Promise<import("./entities/sport.entity").Sport>;
    findAll(): Promise<import("./entities/sport.entity").Sport[]>;
    findOne(id: string): Promise<import("./entities/sport.entity").Sport>;
    patch(id: string, updateSportDto: UpdateSportDto): Promise<import("./entities/sport.entity").Sport>;
    update(id: string, updateSportDto: UpdateSportDto): Promise<import("./entities/sport.entity").Sport>;
    remove(id: string): Promise<void>;
}
