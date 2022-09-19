import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663557004213 implements MigrationInterface {
    name = 'app1663557004213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assesments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "students" character varying NOT NULL, CONSTRAINT "PK_bc44786fdbb215a32a325a9dc01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "students" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "assesments"`);
    }

}
