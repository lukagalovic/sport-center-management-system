import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  constructor(sport: Partial<Sport>) {
    Object.assign(this, sport);
  }
}
