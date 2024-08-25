import { Module } from '@nestjs/common';
import { SportsService } from './sports.service';
import { SportsController } from './sports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from './entities/sport.entity';
import { Class } from 'src/classes/entities/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sport, Class])],
  controllers: [SportsController],
  providers: [SportsService],
})
export class SportsModule {}
