import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest{
    email: string
    password: string;
  }
class AuthenticateUserService{
    async execute({email,password}:IAuthenticateRequest){
        const usersRepository = getCustomRepository(UsersRepositories);
        //verificar se existe email
        const user = await usersRepository.findOne({
            email
        });
        //Verificar o user é condizente
        if(!user){
            //A mensagem de email ou senha para evitar roubo de informação
            throw new Error("Email/Password incorrect");
        }
        //senha, senha cryptografado
        const passwordMatch = await compare(password,user.password)
        //Verificar a senha é condizente
        if(!passwordMatch){
            //A mensagem de email ou senha para evitar roubo de informação
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email

        },
        "2LtJGSZn",
            {
            subject: user.id,
            //Quando tempo o login é valido
            expiresIn:"1d"
            }
        );
        return token;
    }

}
export{AuthenticateUserService}