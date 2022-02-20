import {Router} from "express"
import { userRouter } from "./user.routes"
import { authenticaUserRouter } from "./authenticateUser.routes"
const router = Router()

router.use("/user", userRouter)
router.use("/authenticate", authenticaUserRouter)

export{router}