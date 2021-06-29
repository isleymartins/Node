import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624750257169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(    
            new Table({
                name:"compliments",
                    columns:[
                    {
                    name: "id",
                    type:"uuid",// id universal
                    isPrimary: true,
                    },
                    {
                    name: "user_sender",
                    type:"uuid",// id universal
                    },
                    {
                    name: "user_receiver",
                    type:"uuid",// id universal
                    },
                    {
                    name: "tag_id",
                    type:"uuid",// id universal
                    },
                    {
                    name: "message",
                    type:"varchar",
                    },
                    {
                    name: "created_at",
                    type:"timestamp",
                    default:"now()"
                    },
                    
                ], foreignKeys:[
                    { 
                    name:"FKUserSenderCompliments",
                    referencedTableName:"user",
                    referencedColumnNames:["id"],
                    columnNames:["user_sender"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                    },
                    { 
                    name:"FKUserReceiverCompliments",
                    referencedTableName:"user",
                    referencedColumnNames:["id"],
                    columnNames:["user_receiver"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                    },
                    { 
                    name:"FKUserTagCompliments",
                    referencedTableName:"tag",
                    referencedColumnNames:["id"],
                    columnNames:["tag_id"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                    },
                ]
            })

        /*await queryRunner.createForeignKey(
            new TableForeignKey({
                name:"FKUserCompliments",
                referencedTableName:"user",
                referencedColumnNames:["id"],
                columnNames:["user_sender"],
                onDelete:"SET NULL",
                onUpdate:"SET NULL"

            })
        )*/
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
