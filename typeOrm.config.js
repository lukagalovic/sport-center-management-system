const { ConfigService } = require('@nestjs/config');
const { DataSource } = require('typeorm');

const configService = new ConfigService();

module.exports = new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: +parseInt(configService.getOrThrow('MYSQL_PORT')),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  entities: [
    require('./dist/src/classes/entities/class.entity').Class,
    require('./dist/src/roles/entities/role.entity').Role,
    require('./dist/src/sports/entities/sport.entity').Sport,
    require('./dist/src/users/entities/user.entity').User,
  ],
  migrations: ['migrations/**'],
});
