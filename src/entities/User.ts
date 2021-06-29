import {Entity, PrimaryColumn, Column,CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid } from "uuid";
/*
    Para o import, explicando cada um:
    v1: Endereço de maquina
    v3 e v5: Nome ou nomespace de reset
    v4: Numero aleatorio
*/
@Entity()
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        // this ele pega um atributo de uma class
        if(!this.id){
            this.id=uuid();
        }
    }

}

export{User};