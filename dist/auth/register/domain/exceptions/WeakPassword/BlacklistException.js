import { WeakPasswordBase } from "./WeakPasswordBase.js";
export class BlackListException extends WeakPasswordBase {
    constructor(message, statusCode = 400, isOperational = true) {
        super(message, statusCode, isOperational);
        this.name = this.constructor.name;
    }
}
