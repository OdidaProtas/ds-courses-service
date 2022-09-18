import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663504230737 implements MigrationInterface {
    name = 'app1663504230737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_topic" ALTER COLUMN "bannerUrl" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ALTER COLUMN "author" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ALTER COLUMN "slug" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_topic" ALTER COLUMN "slug" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ALTER COLUMN "author" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog_topic" ALTER COLUMN "bannerUrl" SET NOT NULL`);
    }

}
