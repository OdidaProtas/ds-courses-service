import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663511369874 implements MigrationInterface {
    name = 'app1663511369874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog_article" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "imageUrl" character varying NOT NULL, "bannerUrl" character varying NOT NULL, "position" character varying NOT NULL, "slug" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "PK_37704e628391cfedca258eec71f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "blog_article" ADD CONSTRAINT "FK_0d0c66310446e5a98b2d68c111e" FOREIGN KEY ("categoryId") REFERENCES "blog_topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_article" DROP CONSTRAINT "FK_0d0c66310446e5a98b2d68c111e"`);
        await queryRunner.query(`DROP TABLE "blog_article"`);
    }

}
