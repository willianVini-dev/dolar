import { Router } from 'express';
import { AuthenticateUserController } from '../modules/user/controller/authenticateUserController';

const authenticaUserRouter = Router()

const authenticateUserController = new AuthenticateUserController()

authenticaUserRouter.post("/", authenticateUserController.handle)

export{authenticaUserRouter}