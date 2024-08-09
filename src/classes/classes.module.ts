import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { Class } from './entities/class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from 'src/sports/entities/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Sport])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
