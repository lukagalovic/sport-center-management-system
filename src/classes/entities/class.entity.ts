import { AbstractEntity } from 'src/database/abstract.entity';
import { Sport } from 'src/sports/entities/sport.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Class extends AbstractEntity<Class> {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'int' })
  duration: number;

  @Column('json')
  schedule: { day: string; time: string }[];

  @ManyToOne(() => Sport, (sport) => sport.classes)
  sport: Sport;

  @ManyToMany(() => User, (user) => user.classes)
  users: User[];

  @BeforeInsert()
  @BeforeUpdate()
  calculateDuration() {
    if (this.startDate && this.endDate) {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);

      if (startDate.getTime && endDate.getTime) {
        const diffInMilliseconds = endDate.getTime() - startDate.getTime();
        this.duration = diffInMilliseconds / (1000 * 60 * 60 * 24);
      } else {
        throw new Error('Invalid date format');
      }
    } else {
      this.duration = 0;
    }
  }
}
