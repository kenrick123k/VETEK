export class ExistingUserException extends Error {
    constructor(message, statusCode = 400, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        // Establece el nombre del error como el nombre de la clase
        this.name = this.constructor.name;
    }
}
