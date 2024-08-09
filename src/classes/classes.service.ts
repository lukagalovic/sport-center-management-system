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
    await this.entityManager.save(item);
  }

  async findAll() {
    return await this.classRepository.find();
  }

  async findOne(id: number) {
    return await this.classRepository.findOneBy({ id });
  }

  async patch(id: number, updateClassDto: UpdateClassDto) {
    const item = await this.classRepository.findOneBy({ id });
    item.name = updateClassDto.name;
    item.description = updateClassDto.description;
    item.startDate = updateClassDto.startDate;
    item.endDate = updateClassDto.endDate;

    return await this.entityManager.save(item);
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    const item = await this.classRepository.findOneBy({ id });
    item.name = updateClassDto.name;
    item.description = updateClassDto.description;
    item.startDate = updateClassDto.startDate;
    item.endDate = updateClassDto.endDate;

    return await this.entityManager.save(item);
  }

  async remove(id: number) {
    return this.classRepository.delete(id);
  }
}
