import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663260504936 implements MigrationInterface {
    name = 'app1663260504936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subject" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "courseId" uuid, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subject" ADD CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP CONSTRAINT "FK_9a270c7a3ceac259fbe99163d48"`);
        await queryRunner.query(`DROP TABLE "subject"`);
    }

}
