import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const sport = new User(createUserDto);
    return await this.entityManager.save(sport);
  }

  async findAll() {
    return await this.usersRepository.find({
      relations: ['role'],
    });
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne({
      where: { id },
      relations: ['role'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user)
      throw new NotFoundException(`User with ID ${id} does not exist.`);

    Object.assign(user, { ...updateUserDto });

    return await this.entityManager.save(user);
  }

  async patch(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user)
      throw new NotFoundException(`User with ID ${id} does not exist.`);

    Object.assign(user, { ...updateUserDto });

    return await this.entityManager.save(user);
  }

  async remove(id: number) {
    const user = this.usersRepository.findOneBy({ id });
    if (!user)
      throw new NotFoundException(`User with ID ${id} does not exist.`);

    const result = await this.usersRepository.delete(id);
    if (!result.affected)
      throw new InternalServerErrorException(`Internal server error.`);
  }
}
