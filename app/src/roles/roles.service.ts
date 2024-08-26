import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = new Role(createRoleDto);
    return await this.roleRepository.save(role);
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOne(id: number) {
    return await this.roleRepository.findOneBy({ id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role)
      throw new NotFoundException(`Role with ID ${id} does not exist.`);

    Object.assign(role, { ...updateRoleDto });

    return await this.roleRepository.save(role);
  }

  async patch(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role)
      throw new NotFoundException(`Role with ID ${id} does not exist.`);

    Object.assign(role, { ...updateRoleDto });

    return await this.roleRepository.save(role);
  }

  async remove(id: number) {
    const role = this.roleRepository.findOneBy({ id });
    if (!role)
      throw new NotFoundException(`Role with ID ${id} does not exist.`);

    const result = await this.roleRepository.delete(id);
    if (!result.affected)
      throw new InternalServerErrorException(`Internal server error.`);
  }
}
