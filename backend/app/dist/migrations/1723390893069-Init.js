"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1723390893069 = void 0;
class Init1723390893069 {
    async up(queryRunner) {
        const adminRole = await queryRunner.query(`SELECT * FROM role WHERE name = 'admin'`);
        if (adminRole.length === 0) {
            await queryRunner.query(`
        INSERT INTO role (name, description) VALUES
          ('admin', 'Admin acts as administrator.');
      `);
        }
        const userRole = await queryRunner.query(`SELECT * FROM role WHERE name = 'user'`);
        if (userRole.length === 0) {
            await queryRunner.query(`
        INSERT INTO role (name, description) VALUES
          ('user', 'User acts as a consumer of the system.');
      `);
        }
        const football = await queryRunner.query(`SELECT * FROM sport WHERE name = 'Football'`);
        if (football.length === 0) {
            await queryRunner.query(`
      INSERT INTO sport (name, description, isAvailable) VALUES
        ('Football', 'Football is being taught in this center', true)
    `);
        }
        const basketball = await queryRunner.query(`SELECT * FROM sport WHERE name = 'Basketball'`);
        if (basketball.length === 0) {
            await queryRunner.query(`
      INSERT INTO sport (name, description, isAvailable) VALUES
        ('Basketball', 'Basketball is being taught in this center', true)
    `);
        }
        const tennis = await queryRunner.query(`SELECT * FROM sport WHERE name = 'Tennis'`);
        if (tennis.length === 0) {
            await queryRunner.query(`
      INSERT INTO sport (name, description, isAvailable) VALUES
        ('Tennis', 'Tennis is being taught in this center', true)
    `);
        }
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DELETE FROM role;
          `);
        await queryRunner.query(`
            DELETE FROM sport;
          `);
    }
}
exports.Init1723390893069 = Init1723390893069;
//# sourceMappingURL=1723390893069-Init.js.map