import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = new Role(createRoleDto);
    return await this.entityManager.save(role);
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOne(id: number) {
    return await this.roleRepository.findOneBy({ id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.findOneBy({ id });
    Object.assign(role, { ...updateRoleDto });

    return await this.entityManager.save(role);
    // role.users = updateRoleDto.users.map((createUserDto) => new User(createUserDto))
  }

  async patch(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.findOneBy({ id });
    Object.assign(role, { ...updateRoleDto });

    return await this.entityManager.save(role);
  }

  async remove(id: number) {
    return await this.roleRepository.delete(id);
  }
}
