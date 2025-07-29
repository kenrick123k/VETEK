import { checkUser } from "../../../validation/schemas/UserSchema.js";
export class RegisterController {
    constructor(registerUser) {
        this.registerUser = registerUser;
    }
    async register(req, res, next) {
        try {
            console.log('llego a register controller');
            const result = await checkUser(req.body);
            if (!result.success) {
                return res.status(400).json(JSON.parse(result.error.message));
            }
            await this.registerUser.execute(result.data);
            return res.status(201).json({ message: 'User created successfully' });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    }
}
