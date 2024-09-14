"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const class_entity_1 = require("./src/classes/entities/class.entity");
const role_entity_1 = require("./src/roles/entities/role.entity");
const sport_entity_1 = require("./src/sports/entities/sport.entity");
const user_entity_1 = require("./src/users/entities/user.entity");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: configService.getOrThrow('MYSQL_HOST'),
    port: configService.getOrThrow('MYSQL_PORT'),
    database: configService.getOrThrow('MYSQL_DATABASE'),
    username: configService.getOrThrow('MYSQL_USERNAME'),
    password: configService.getOrThrow('MYSQL_PASSWORD'),
    entities: [sport_entity_1.Sport, class_entity_1.Class, role_entity_1.Role, user_entity_1.User],
    migrations: ['migrations/**'],
});
//# sourceMappingURL=typeOrm.config.js.map