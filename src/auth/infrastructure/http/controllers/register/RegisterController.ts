import { RegisterUserUseCase } from "../../../../application/use-cases/User/RegisterUserUseCase";
import { Request, Response, NextFunction } from "express";
import { User } from "../../../../domain/entities/Veterinary";
import { checkUser } from "../../../validation/schemas/UserSchema";


export class RegisterController{
  private registerUser: RegisterUserUseCase
  constructor(registerUser: RegisterUserUseCase){
    this.registerUser = registerUser
  }

  async register(req: Request, res: Response, next: NextFunction){
    try{
    const result = await checkUser(req.body as User)
    if (!result.success){
      return res.status(400).json({ errors: result.error.message })
    }
    await this.registerUser.execute(result.data)
    res.status(201).json({ message: 'User created successfully'})
    }catch(error){
      next(error)
      console.log(error)
    }
  }
}