import { RegisterUserUseCase } from "../../../../application/use-cases/User/RegisterUserUseCase.js";
import { Request, Response, NextFunction } from "express";
import { User } from "../../../../domain/entities/Veterinary.js";
import { checkUser } from "../../../validation/schemas/UserSchema.js";


export class RegisterController {
  private registerUser: RegisterUserUseCase;

  constructor(registerUser: RegisterUserUseCase) {
    this.registerUser = registerUser;
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('llego a register controller');
      const result = await checkUser(req.body as User);
      if (!result.success) {
        return res.status(400).json({ errors: result.error.message });
      }

      await this.registerUser.execute(result.data)
      return res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
      console.error(error);  // primero loguea
      next(error);           // luego pasa el error a middleware
    }
  }
}
