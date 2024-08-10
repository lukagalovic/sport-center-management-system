import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createClassDto: CreateClassDto) {
    const item = new Class(createClassDto);
    return (await this.entityManager.save(item)).id;
  }

  async findAll() {
    return await this.classRepository.find({
      relations: ['sport'],
    });
  }

  async findOne(id: number) {
    return await this.classRepository.findOne({
      where: { id },
      relations: ['sport'],
    });
  }

  async patch(id: number, updateClassDto: UpdateClassDto) {
    const item = await this.classRepository.findOneBy({ id });
    item.name = updateClassDto.name;
    item.description = updateClassDto.description;
    item.startDate = updateClassDto.startDate;
    item.endDate = updateClassDto.endDate;
    item.sport = updateClassDto.sport;

    return (await this.entityManager.save(item)).id;
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    const item = await this.classRepository.findOneBy({ id });
    item.name = updateClassDto.name;
    item.description = updateClassDto.description;
    item.startDate = updateClassDto.startDate;
    item.endDate = updateClassDto.endDate;
    item.sport = updateClassDto.sport;

    return (await this.entityManager.save(item)).id;
  }

  async remove(id: number) {
    return await this.classRepository.delete(id);
  }
}
