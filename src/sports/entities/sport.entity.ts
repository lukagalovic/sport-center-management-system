import { Class } from 'src/classes/entities/class.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Sport extends AbstractEntity<Sport> {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;

  @Column({ default: true })
  isAvailable: boolean;

  @OneToMany(() => Class, (item) => item.sport)
  classes: Class[];
}
