import { Email } from "../../../domain/value-objects/Email.js";
import { UserMapper } from "../../mappers/UserMapper.js";
import { ExistingUserException } from "../../exceptions/ExistingUserException.js";
export class RegisterUserUseCase {
    constructor(repository, passwordValidator) {
        this.repository = repository;
        this.passwordValidator = passwordValidator;
    }
    async execute(input) {
        const email = new Email(input.email);
        const existingUser = await this.repository.findByEmail(email.value);
        if (existingUser)
            throw new ExistingUserException('User already exists', 400);
        await this.passwordValidator.isStrong(input.password);
        const user = UserMapper.toDomain(input);
        await this.repository.save(user);
    }
}
