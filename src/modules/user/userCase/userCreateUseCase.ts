import { IUserRepository } from "../repository/interface/IUserRepository";
import{inject, injectable} from "tsyringe"
import { hash } from "bcrypt";


@injectable()
class UserCreateUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository:IUserRepository
  ){}

  async execute({name, email, password}):Promise<void>{
    const hashPassword = await hash(password, 8);
    await this.userRepository.create({name, email, password:hashPassword})
  }

}
export {UserCreateUseCase}
