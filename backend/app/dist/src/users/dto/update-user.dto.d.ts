import { CreateUserDto } from './create-user.dto';
import { Role } from 'src/roles/entities/role.entity';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: Role;
}
export {};
