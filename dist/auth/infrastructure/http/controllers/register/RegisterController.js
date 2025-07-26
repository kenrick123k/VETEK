import { checkUser } from "../../../validation/schemas/UserSchema";
export class RegisterController {
    constructor(registerUser) {
        this.registerUser = registerUser;
    }
    async register(req, res, next) {
        try {
            const result = await checkUser(req.body);
            if (!result.success) {
                return res.status(400).json({ errors: result.error.message });
            }
            await this.registerUser.execute(result.data);
            res.status(201).json({ message: 'User created successfully' });
        }
        catch (error) {
            next(error);
            console.log(error);
        }
    }
}
