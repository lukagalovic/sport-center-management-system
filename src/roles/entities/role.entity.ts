import { AbstractEntity } from 'src/database/abstract.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Role extends AbstractEntity<Role> {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
