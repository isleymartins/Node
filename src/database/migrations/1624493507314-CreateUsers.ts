import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { idText } from "typescript";

export class CreateUsers1624493507314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"user",
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
                    name: "email",
                    type:"varchar",
                    },
                    {
                    name: "admin",
                    type:"boolean",
                    default:false
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
        await queryRunner.dropTable("user");
    }

}
