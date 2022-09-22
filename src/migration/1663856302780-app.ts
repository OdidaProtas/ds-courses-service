import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663856302780 implements MigrationInterface {
    name = 'app1663856302780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "unit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying, "imageUrl" character varying NOT NULL, "bannerUrl" character varying NOT NULL, "duration" character varying, "author" character varying, "lastEditor" character varying, "slug" character varying, "subjectId" uuid, CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "unit" ADD CONSTRAINT "FK_1a5ca29fcabf5a0b7af28705beb" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "unit" DROP CONSTRAINT "FK_1a5ca29fcabf5a0b7af28705beb"`);
        await queryRunner.query(`DROP TABLE "unit"`);
    }

}
