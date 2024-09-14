import { Class } from 'src/classes/entities/class.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @ManyToMany(() => Class, (cls) => cls.users)
  @JoinTable()
  classes: Class[];
}
