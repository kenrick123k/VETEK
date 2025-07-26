import { Router } from "express";
import { registerRouter } from "./register";

export const authRouter = Router()

authRouter.use('/register', registerRouter)
