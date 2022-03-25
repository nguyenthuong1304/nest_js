import {MigrationInterface, QueryRunner} from "typeorm";

export class createCategory1648192074891 implements MigrationInterface {
    name = 'createCategory1648192074891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updated" TIMESTAMP(3) NOT NULL DEFAULT now(), "created" TIMESTAMP(3) NOT NULL DEFAULT now(), "deleted" TIMESTAMP(3), "name" character varying NOT NULL, "slug" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
