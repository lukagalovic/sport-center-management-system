import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1723390893069 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminRole = await queryRunner.query(
      `SELECT * FROM role WHERE name = 'admin'`,
    );
    if (adminRole.length === 0) {
      await queryRunner.query(`
        INSERT INTO role (name, description) VALUES
          ('admin', 'Admin acts as administrator.');
      `);
    }

    const userRole = await queryRunner.query(
      `SELECT * FROM role WHERE name = 'user'`,
    );
    if (userRole.length === 0) {
      await queryRunner.query(`
        INSERT INTO role (name, description) VALUES
          ('user', 'User acts as a consumer of the system.');
      `);
    }

    const football = await queryRunner.query(
      `SELECT * FROM sport WHERE name = 'Football'`,
    );
    if (football.length === 0) {
      await queryRunner.query(`
      INSERT INTO sport (name, description, isAvailable) VALUES
        ('Football', 'Football is being taught in this center', true)
    `);
    }

    const basketball = await queryRunner.query(
      `SELECT * FROM sport WHERE name = 'Basketball'`,
    );
    if (basketball.length === 0) {
      await queryRunner.query(`
      INSERT INTO sport (name, description, isAvailable) VALUES
        ('Basketball', 'Basketball is being taught in this center', true)
    `);
    }

    const tennis = await queryRunner.query(
      `SELECT * FROM sport WHERE name = 'Tennis'`,
    );
    if (tennis.length === 0) {
      await queryRunner.query(`
      INSERT INTO sport (name, description, isAvailable) VALUES
        ('Tennis', 'Tennis is being taught in this center', true)
    `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM role;
          `);

    await queryRunner.query(`
            DELETE FROM sport;
          `);
  }
}
