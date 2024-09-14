import { Class } from 'src/classes/entities/class.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Role } from 'src/roles/entities/role.entity';
export declare class User extends AbstractEntity<User> {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: Role;
    classes: Class[];
}
