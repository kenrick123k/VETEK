import { Router } from "express";
import { RegisterController } from "../controllers/register/RegisterController";
import { RegisterUserUseCase } from "../../../application/use-cases/User/RegisterUserUseCase";
import { UserRepositoryImpl } from "../../Repositories/MySQLUserRepository";

const userRepository = new UserRepositoryImpl()
const registerUseCase = new RegisterUserUseCase(userRepository)
const registerController = new RegisterController(registerUseCase)

export const register = Router()


register.post('/register', (req, res, next) => registerController.register(req, res, next))