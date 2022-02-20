import {Router} from "express"
import { UserCreateController } from "../modules/user/controller/userCreateController";

const userRouter = Router();
const userCreateController = new UserCreateController()

userRouter.post("/", userCreateController.handle)

export {userRouter}