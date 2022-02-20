import {User} from "../../entities/user"

interface ICreateUserDTO{
  name: string;
  email:string;
  password:string;
}

interface IUserRepository{
  create(data:ICreateUserDTO):Promise<void>
  findByEmail(email:string):Promise<User>
}

export{IUserRepository,ICreateUserDTO}