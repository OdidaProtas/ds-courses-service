import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663262212046 implements MigrationInterface {
    name = 'app1663262212046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" ADD "imageUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "bannerUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "bannerUrl"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "imageUrl"`);
    }

}
