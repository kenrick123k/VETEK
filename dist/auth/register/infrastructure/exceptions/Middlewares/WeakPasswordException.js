import { WeakPasswordBase } from "../../../domain/exceptions/WeakPassword/WeakPasswordBase.js";
export function WeakPasswordException(err, req, res, next) {
    if (err instanceof WeakPasswordBase) {
        return res.status(err.statusCode).json({
            error: err.name,
            message: err.message
        });
    }
    next(err);
}
