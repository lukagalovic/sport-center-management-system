import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { Repository } from 'typeorm';
import { Sport } from './entities/sport.entity';
export declare class SportsService {
    private readonly sportsRepository;
    constructor(sportsRepository: Repository<Sport>);
    create(createSportDto: CreateSportDto): Promise<Sport>;
    findAll(): Promise<Sport[]>;
    findOne(id: number): Promise<Sport>;
    update(id: number, updateSportDto: UpdateSportDto): Promise<Sport>;
    patch(id: number, updateSportDto: UpdateSportDto): Promise<Sport>;
    remove(id: number): Promise<void>;
}
