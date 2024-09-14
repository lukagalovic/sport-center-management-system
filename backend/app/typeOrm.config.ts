import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Class } from './src/classes/entities/class.entity';
import { Role } from './src/roles/entities/role.entity';
import { Sport } from './src/sports/entities/sport.entity';
import { User } from './src/users/entities/user.entity';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: configService.getOrThrow('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  entities: [Sport, Class, Role, User],
  migrations: ['migrations/**'],
});
