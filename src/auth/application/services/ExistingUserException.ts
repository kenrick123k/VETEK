export class ExistingUserException extends Error{
  public readonly statusCode: number
  public readonly isOperational: boolean

  constructor(message: string, statusCode = 400, isOperational = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational

    // Establece el nombre del error como el nombre de la clase
    this.name = this.constructor.name
  }
}