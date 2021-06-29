import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


//Criar otags
class CreateTagService{
    async execute( name:string ) {
      const tagsRepository = getCustomRepository(TagsRepositories);
  
      console.log("Tag", name);

        //Verificar a escrita da tag é condizente
        if(!name){
            throw new Error("Incorrect name");
            
        }
        //Verificar se a tag ja existe.
        //Select * from tag where name
         const tagAlreadyExists = await tagsRepository.findOne({
            name,
        });
        
        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
          }
        //Salva os objestos no banco de dados
        const tag = tagsRepository.create({
            name
          });      
        await tagsRepository.save(tag);
        return tag;
    }

}
export{CreateTagService}