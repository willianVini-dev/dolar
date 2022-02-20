import {Request, Response} from "express"
import {container} from "tsyringe"
import { UserCreateUseCase } from "../userCase/userCreateUseCase"

class UserCreateController{

  async handle(request:Request, response:Response):Promise<Response>{

    const {name, email, password} = request.body;
    const userCreateUseCase = container.resolve(UserCreateUseCase)
    await userCreateUseCase.execute({name, email, password});
    return response.status(201).send()
    
  }

}
export {UserCreateController}