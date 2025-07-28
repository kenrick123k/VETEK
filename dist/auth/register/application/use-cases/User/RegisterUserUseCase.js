import { Email } from "../../../domain/value-objects/Email.js";
import { UserMapper } from "../../mappers/UserMapper.js";
import { ExistingUserException } from "../../exceptions/ExistingUserException.js";
import { WeakPasswordException } from "../../exceptions/WeakPasswordException.js";
export class RegisterUserUseCase {
    constructor(repository, passwordValidator) {
        this.repository = repository;
        this.passwordValidator = passwordValidator;
    }
    async execute(input) {
        const email = new Email(input.email);
        const validPassword = this.passwordValidator.isStrong(input.password);
        const existingUser = await this.repository.findByEmail(email.value);
        if (existingUser)
            throw new ExistingUserException('User already exists', 400);
        if (validPassword)
            throw new WeakPasswordException('Password does not meet the minimum security requirements.', 406);
        const user = UserMapper.toDomain(input);
        await this.repository.save(user);
    }
}
