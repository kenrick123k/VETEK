import { Router } from "express"
import { registerRouter } from "./register.js"

export const authRouter = Router()

authRouter.use('/register', registerRouter)
