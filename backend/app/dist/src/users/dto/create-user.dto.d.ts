import { Role } from 'src/roles/entities/role.entity';
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: Role;
}
