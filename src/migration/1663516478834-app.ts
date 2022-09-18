import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663516478834 implements MigrationInterface {
    name = 'app1663516478834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_article" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_article" DROP COLUMN "description"`);
    }

}
