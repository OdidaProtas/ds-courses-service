import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663698561570 implements MigrationInterface {
    name = 'app1663698561570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course_categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying, "bannerUrl" character varying, "imageUrl" character varying, "url" character varying, CONSTRAINT "PK_626794960514393da07e942f8d0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "course" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_c6c48d73b3b32e47e9cc1cfc4c4" FOREIGN KEY ("categoryId") REFERENCES "course_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_c6c48d73b3b32e47e9cc1cfc4c4"`);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "categoryId"`);
        await queryRunner.query(`DROP TABLE "course_categories"`);
    }

}
