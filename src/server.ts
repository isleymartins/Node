import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import "./database";

//@types/express
const app=express();
//Metodos de requicisão
/*
GET: Busca informaçao
HEAD: Busca informaçao, porém sem conter o corpo da resposta.
POST: Insere uma informação(cria).
PUT: Altera alguma informação
DELETE: Remove um dado.
PATCH: Altera uma informação espercifica

Tipos de parametros
Routes params: http://localhost:3000/produto/(o codigo do produto)
Query params: http://localhost:3000/produto?nome=(produto desejado)&descricao=(descrição desejado)
Body params={
    "nome": "(produto desejado)"
    "descricao": "(descrição desejado)"
}
*/
app.use(express.json());
//local onde pode usar todas as rotas
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
            
        })
    }
    return response.status(500).json({
        status: "error",
        Message: "Internal Server Error"
    });

});
//http://localhost:3000
app.listen(3000, ()=>console.log("Server in running"))