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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM role;
          `);
  }
}
