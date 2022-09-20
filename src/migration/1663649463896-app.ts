import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663649463896 implements MigrationInterface {
    name = 'app1663649463896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" RENAME COLUMN "dtwtimezone" TO "created_at"`);
        await queryRunner.query(`CREATE TABLE "about" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "body" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_e7b581a8a74d0a2ea3aa53226ee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "events" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`DROP TABLE "about"`);
        await queryRunner.query(`ALTER TABLE "events" RENAME COLUMN "created_at" TO "dtwtimezone"`);
    }

}
