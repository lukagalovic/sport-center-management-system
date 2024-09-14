import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
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
    return await this.userRepository.save(cls);
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
      relations: ['sport', 'users'],
    });
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    const cls = await this.classRepository.findOneBy({ id });

    if (!cls)
      throw new NotFoundException(`Class with ID ${id} does not exist.`);

    Object.assign(cls, { ...updateClassDto });

    return await this.userRepository.save(cls);
  }

  async patch(id: number, updateClassDto: UpdateClassDto) {
    const cls = await this.classRepository.findOneBy({ id });
    if (!cls)
      throw new NotFoundException(`Class with ID ${id} does not exist.`);

    Object.assign(cls, { ...updateClassDto });

    return await this.userRepository.save(cls);
  }

  async remove(id: number) {
    const cls = this.classRepository.findOneBy({ id });
    if (!cls)
      throw new NotFoundException(`Class with ID ${id} does not exist.`);

    const result = await this.classRepository.delete(id);
    if (!result.affected)
      throw new InternalServerErrorException(`Internal server error.`);
  }

  async applyForClass(classId: number, userId: number) {
    return await this.entityManager.transaction(async (entityManager) => {
      const cls = await this.classRepository.findOne({
        where: { id: classId },
        relations: ['users'],
      });

      if (!cls)
        throw new NotFoundException(`Class with ID ${classId} does not exist.`);

      if (cls.users.some((user) => user.id === userId))
        throw new ConflictException(
          `User with ID ${userId} is already applied to this class`,
        );

      const user = await this.userRepository.findOne({
        where: { id: userId },
      });
      if (!user) {
        throw new InternalServerErrorException(`Internal server error.`);
      }

      cls.users.push(user);

      return await entityManager.save(cls);
    });
  }
}
