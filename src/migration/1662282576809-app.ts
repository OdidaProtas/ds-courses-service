import { MigrationInterface, QueryRunner } from "typeorm";

export class app1662282576809 implements MigrationInterface {
    name = 'app1662282576809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" varchar PRIMARY KEY NOT NULL, "lessonId" varchar)`);
        await queryRunner.query(`CREATE TABLE "lesson" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "videoURL" varchar)`);
        await queryRunner.query(`CREATE TABLE "sub_topic" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "topicId" varchar)`);
        await queryRunner.query(`CREATE TABLE "topic" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "image" varchar, "bannerImage" varchar, "courseId" varchar)`);
        await queryRunner.query(`CREATE TABLE "course" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "image" varchar NOT NULL, "bannerImage" varchar NOT NULL, "addedBy" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`CREATE TABLE "temporary_task" ("id" varchar PRIMARY KEY NOT NULL, "lessonId" varchar, CONSTRAINT "FK_dec5819f5bdcc8b9344794aa624" FOREIGN KEY ("lessonId") REFERENCES "lesson" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_task"("id", "lessonId") SELECT "id", "lessonId" FROM "task"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`ALTER TABLE "temporary_task" RENAME TO "task"`);
        await queryRunner.query(`CREATE TABLE "temporary_sub_topic" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "topicId" varchar, CONSTRAINT "FK_01cc15ef17e19c4e7730a5183d6" FOREIGN KEY ("topicId") REFERENCES "topic" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_sub_topic"("id", "title", "description", "topicId") SELECT "id", "title", "description", "topicId" FROM "sub_topic"`);
        await queryRunner.query(`DROP TABLE "sub_topic"`);
        await queryRunner.query(`ALTER TABLE "temporary_sub_topic" RENAME TO "sub_topic"`);
        await queryRunner.query(`CREATE TABLE "temporary_topic" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "image" varchar, "bannerImage" varchar, "courseId" varchar, CONSTRAINT "FK_cc209f6f951f94af47acf75485b" FOREIGN KEY ("courseId") REFERENCES "course" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_topic"("id", "title", "description", "image", "bannerImage", "courseId") SELECT "id", "title", "description", "image", "bannerImage", "courseId" FROM "topic"`);
        await queryRunner.query(`DROP TABLE "topic"`);
        await queryRunner.query(`ALTER TABLE "temporary_topic" RENAME TO "topic"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "topic" RENAME TO "temporary_topic"`);
        await queryRunner.query(`CREATE TABLE "topic" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "image" varchar, "bannerImage" varchar, "courseId" varchar)`);
        await queryRunner.query(`INSERT INTO "topic"("id", "title", "description", "image", "bannerImage", "courseId") SELECT "id", "title", "description", "image", "bannerImage", "courseId" FROM "temporary_topic"`);
        await queryRunner.query(`DROP TABLE "temporary_topic"`);
        await queryRunner.query(`ALTER TABLE "sub_topic" RENAME TO "temporary_sub_topic"`);
        await queryRunner.query(`CREATE TABLE "sub_topic" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "topicId" varchar)`);
        await queryRunner.query(`INSERT INTO "sub_topic"("id", "title", "description", "topicId") SELECT "id", "title", "description", "topicId" FROM "temporary_sub_topic"`);
        await queryRunner.query(`DROP TABLE "temporary_sub_topic"`);
        await queryRunner.query(`ALTER TABLE "task" RENAME TO "temporary_task"`);
        await queryRunner.query(`CREATE TABLE "task" ("id" varchar PRIMARY KEY NOT NULL, "lessonId" varchar)`);
        await queryRunner.query(`INSERT INTO "task"("id", "lessonId") SELECT "id", "lessonId" FROM "temporary_task"`);
        await queryRunner.query(`DROP TABLE "temporary_task"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "topic"`);
        await queryRunner.query(`DROP TABLE "sub_topic"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
