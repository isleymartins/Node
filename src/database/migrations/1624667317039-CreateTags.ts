import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1624667317039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tag",
                columns:[
                    {
                    name: "id",
                    type:"uuid",// id universal
                    isPrimary: true,
                    },
                    {
                    name: "name",
                    type:"varchar",
                    },
                    {
                    name: "created_at",
                    type:"timestamp",
                    default:"now()"
                    },
                    {
                    name: "updated_at",
                    type:"timestamp",
                    default:"now()"
                    },
                        
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags");
    }

}
