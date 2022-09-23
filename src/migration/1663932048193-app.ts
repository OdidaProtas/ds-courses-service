import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663932048193 implements MigrationInterface {
    name = 'app1663932048193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP CONSTRAINT "FK_01cc15ef17e19c4e7730a5183d6"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_dec5819f5bdcc8b9344794aa624"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "topicId"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "videoURL"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "lessonId"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "bannerImage" character varying`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "isTask" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "lessonId" uuid`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "imageUrl" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "bannerUrl" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "duration" character varying`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "author" character varying`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "lastEditor" character varying`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "slug" character varying`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "topicId" uuid`);
        await queryRunner.query(`ALTER TABLE "lesson" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD CONSTRAINT "FK_1b11c118e706a7c134e051a1248" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_d0249d483a9b7116cd9c23cd3be" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_d0249d483a9b7116cd9c23cd3be"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP CONSTRAINT "FK_1b11c118e706a7c134e051a1248"`);
        await queryRunner.query(`ALTER TABLE "lesson" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "topicId"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "lastEditor"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "bannerUrl"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "lessonId"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "isTask"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "bannerImage"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "lessonId" uuid`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "videoURL" character varying`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD "topicId" uuid`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_dec5819f5bdcc8b9344794aa624" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_topic" ADD CONSTRAINT "FK_01cc15ef17e19c4e7730a5183d6" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
