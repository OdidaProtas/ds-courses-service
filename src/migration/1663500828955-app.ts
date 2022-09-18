import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663500828955 implements MigrationInterface {
    name = 'app1663500828955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_topic" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ADD "imageUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ADD "bannerUrl" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ADD "author" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ADD "slug" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_topic" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "blog_topic" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "blog_topic" DROP COLUMN "bannerUrl"`);
        await queryRunner.query(`ALTER TABLE "blog_topic" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "blog_topic" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "blog_topic" DROP COLUMN "title"`);
    }

}
