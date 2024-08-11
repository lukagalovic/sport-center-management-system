import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createClassDto: CreateClassDto) {
    const cls = new Class(createClassDto);
    return await this.entityManager.save(cls);
  }

  async findAll(filter?: { sports?: string[] }) {
    const query = this.classRepository.createQueryBuilder('class');

    if (filter?.sports) {
      query
        .innerJoinAndSelect('class.sport', 'sport')
        .where('sport.name IN (:...sports)', { sports: filter.sports });
    } else {
      query.leftJoinAndSelect('class.sport', 'sport');
    }

    return await query.getMany();
  }

  async findOne(id: number) {
    return await this.classRepository.findOne({
      where: { id },
      relations: ['sport'],
    });
  }

  async patch(id: number, updateClassDto: UpdateClassDto) {
    const cls = await this.classRepository.findOneBy({ id });
    Object.assign(cls, { ...updateClassDto });

    return await this.entityManager.save(cls);
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    const cls = await this.classRepository.findOneBy({ id });
    Object.assign(cls, { ...updateClassDto });

    return await this.entityManager.save(cls);
  }

  async remove(id: number) {
    return await this.classRepository.delete(id);
  }

  async applyForClass(classId: number, userId: number) {
    return await this.entityManager.transaction(async (entityManager) => {
      const cls = await this.classRepository.findOne({
        where: { id: classId },
        relations: ['users'],
      });

      const user = await this.userRepository.findOne({
        where: { id: userId },
      });

      Object.assign(cls, {
        users: [...cls.users, user],
      });

      return await entityManager.save(cls);
    });
  }
}
