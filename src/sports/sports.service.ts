import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { EntityManager, Repository } from 'typeorm';
import { Sport } from './entities/sport.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(Sport)
    private readonly sportsRepository: Repository<Sport>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createSportDto: CreateSportDto) {
    const sport = new Sport(createSportDto);
    return await this.entityManager.save(sport);
  }

  async findAll() {
    return await this.sportsRepository.find();
  }

  async findOne(id: number) {
    return await this.sportsRepository.findOneBy({ id });
  }

  async patch(id: number, updateSportDto: UpdateSportDto) {
    const sport = await this.sportsRepository.findOneBy({ id });
    sport.name = updateSportDto.name;
    sport.description = updateSportDto.description;
    sport.isAvailable = updateSportDto.isAvailable;

    return (await this.entityManager.save(sport)).id;
  }

  async update(id: number, updateSportDto: UpdateSportDto) {
    const sport = await this.sportsRepository.findOneBy({ id });
    sport.name = updateSportDto.name;
    sport.description = updateSportDto.description;
    sport.isAvailable = updateSportDto.isAvailable;

    return await this.entityManager.save(sport);
  }

  async remove(id: number) {
    return await this.sportsRepository.delete(id);
  }
}
