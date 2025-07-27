import { Router } from "express";
import { RegisterController } from "../controllers/register/RegisterController.js";
import { RegisterUserUseCase } from "../../../application/use-cases/User/RegisterUserUseCase.js";
import { UserRepositoryImpl } from "../../Repositories/MySQLUserRepository.js";
const userRepository = new UserRepositoryImpl();
const registerUseCase = new RegisterUserUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);
export const registerRouter = Router();
registerRouter.post('/', registerController.register.bind(registerController));
