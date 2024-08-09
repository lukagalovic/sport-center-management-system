import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string | null;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'int' })
  duration: number;

  constructor(sport: Partial<Sport>) {
    Object.assign(this, sport);
  }

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
