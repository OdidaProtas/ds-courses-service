import { MigrationInterface, QueryRunner } from "typeorm";

export class app1664010026043 implements MigrationInterface {
    name = 'app1664010026043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "bannerImage"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "imageUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "bannerUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "bannerUrl"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "bannerImage" character varying`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "image" character varying`);
    }

}
