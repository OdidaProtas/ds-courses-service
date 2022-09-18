import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663499846480 implements MigrationInterface {
    name = 'app1663499846480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "topic" DROP CONSTRAINT "FK_cc209f6f951f94af47acf75485b"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "bannerImage"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "courseId"`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "bannerImage" character varying`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "courseId" uuid`);
        await queryRunner.query(`ALTER TABLE "topic" ADD CONSTRAINT "FK_cc209f6f951f94af47acf75485b" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "topic" DROP CONSTRAINT "FK_cc209f6f951f94af47acf75485b"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "courseId"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "bannerImage"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "courseId" uuid`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "bannerImage" character varying`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "topic" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "topic" ADD CONSTRAINT "FK_cc209f6f951f94af47acf75485b" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
