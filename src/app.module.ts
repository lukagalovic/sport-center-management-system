import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SportsModule } from './sports/sports.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    SportsModule,
    ClassesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
