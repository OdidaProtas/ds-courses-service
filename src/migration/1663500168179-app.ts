import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663500168179 implements MigrationInterface {
    name = 'app1663500168179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog_topic" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_8a00047f71234db0c2b17ea0320" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_topic"`);
    }

}
