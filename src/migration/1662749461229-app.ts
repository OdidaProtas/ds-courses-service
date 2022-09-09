import { MigrationInterface, QueryRunner } from "typeorm";

export class app1662749461229 implements MigrationInterface {
    name = 'app1662749461229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_course" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "addedBy" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`INSERT INTO "temporary_course"("id", "title", "description", "addedBy", "isActive") SELECT "id", "title", "description", "addedBy", "isActive" FROM "course"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`ALTER TABLE "temporary_course" RENAME TO "course"`);
        await queryRunner.query(`CREATE TABLE "temporary_course" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "addedBy" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (0), "imageUrl" varchar NOT NULL, "bannerUrl" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_course"("id", "title", "description", "addedBy", "isActive") SELECT "id", "title", "description", "addedBy", "isActive" FROM "course"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`ALTER TABLE "temporary_course" RENAME TO "course"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" RENAME TO "temporary_course"`);
        await queryRunner.query(`CREATE TABLE "course" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "addedBy" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`INSERT INTO "course"("id", "title", "description", "addedBy", "isActive") SELECT "id", "title", "description", "addedBy", "isActive" FROM "temporary_course"`);
        await queryRunner.query(`DROP TABLE "temporary_course"`);
        await queryRunner.query(`ALTER TABLE "course" RENAME TO "temporary_course"`);
        await queryRunner.query(`CREATE TABLE "course" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "image" varchar NOT NULL, "bannerImage" varchar NOT NULL, "addedBy" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`INSERT INTO "course"("id", "title", "description", "addedBy", "isActive") SELECT "id", "title", "description", "addedBy", "isActive" FROM "temporary_course"`);
        await queryRunner.query(`DROP TABLE "temporary_course"`);
    }

}
