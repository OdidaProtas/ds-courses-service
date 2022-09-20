import { MigrationInterface, QueryRunner } from "typeorm";

export class app1663647122584 implements MigrationInterface {
    name = 'app1663647122584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."events_mode_enum" AS ENUM('virtual_only', 'mixed', 'in_person')`);
        await queryRunner.query(`CREATE TABLE "events" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "imageUrl" character varying, "bannerUrl" character varying NOT NULL, "author" character varying NOT NULL, "dtwtimezone" TIMESTAMP WITH TIME ZONE NOT NULL, "maxAudience" integer, "mode" "public"."events_mode_enum" NOT NULL DEFAULT 'virtual_only', CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TYPE "public"."events_mode_enum"`);
    }

}
