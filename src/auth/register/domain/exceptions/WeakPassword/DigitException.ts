import { WeakPasswordBase } from "./WeakPasswordBase.js"
export class DigitException extends WeakPasswordBase{
  constructor(message: string, statusCode = 400, isOperational = true) {
    super(message, statusCode, isOperational)
    this.name = this.constructor.name
  }
}