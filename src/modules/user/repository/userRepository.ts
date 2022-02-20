import { getRepository, Repository } from "typeorm"
import { User } from "../entities/user"
import { ICreateUserDTO, IUserRepository } from "./interface/IUserRepository"


class UserRepository implements IUserRepository{

  private repository:Repository<User>
  constructor(){
    this.repository = getRepository(User);
  }

  async create({name, email, password}:ICreateUserDTO):Promise<void>{
    const user = this.repository.create({name, email, password});
    await this.repository.save(user);
  }

  async findByEmail(email:string):Promise<User>{
    return await this.repository.findOne({email});
  }

}
export{UserRepository}