import { Request, Response, NextFunction } from "express"
import { WeakPasswordBase } from "../../../domain/exceptions/WeakPassword/WeakPasswordBase.js"
export function WeakPasswordException(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction){
    if(err instanceof WeakPasswordBase){
      return res.status(err.statusCode).json({
        error: err.name,
        message: err.message
      })
    }
    next(err)
  }