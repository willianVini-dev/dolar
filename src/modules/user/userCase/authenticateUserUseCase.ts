import { User } from "../entities/user";
import {inject, injectable} from "tsyringe"
import { IUserRepository } from "../repository/interface/IUserRepository";
import { compare } from "bcrypt";
import {sign} from "jsonwebtoken"


interface IResponse{
  user:{
    name:string,
    email:string
  };
  token:string;
}
@injectable()
class AuthenticateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository:IUserRepository
  ){}

  async execute({email, password}):Promise<IResponse>{

    const user = await this.userRepository.findByEmail(email);
    if(!user){ throw new Error("Email or password incorret") }

    const passwordMath = await compare(password, user.password);
    if(!passwordMath){ throw new Error("Email or password incorret")}

    const token = sign({},"568a7bd05c09b03d57f0e614eb55f58f",{ subject:user.id, expiresIn:"1d" })
    const tokenResponse:IResponse = {
      user:{ name:user.name, email:user.email },
      token
    }
    return tokenResponse;

  }
}
export{AuthenticateUserUseCase}