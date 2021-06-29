import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

//Criar usuario
class CreateUserService {
    async execute({ name, email, admin=false, password }: IUserRequest) {
      const usersRepository = getCustomRepository(UsersRepositories);
  
      console.log("Email", email);

        //Verificar a escrita do email é condizente com a conta
        if(!email){
            throw new Error("Email incorreto");
            
        }
        
         const userAlreadyExists = await usersRepository.findOne({
            email
        });
        //Verificar se o usuario existe
        //Select * from tag where user
        if (userAlreadyExists) {
            throw new Error("User already exists");
          }
        //a senha e o valor cryptografado
        const passwordHash = await hash(password,8)
        //Salva os objestos no banco de dados
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
          });      
        await usersRepository.save(user);
        return user;
    }

}
export{CreateUserService}