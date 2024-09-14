import { AbstractEntity } from 'src/database/abstract.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Role extends AbstractEntity<Role> {
    name: string;
    description: string | null;
    users: User[];
}
