import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
export declare class RolesService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role>;
    patch(id: number, updateRoleDto: UpdateRoleDto): Promise<Role>;
    remove(id: number): Promise<void>;
}
