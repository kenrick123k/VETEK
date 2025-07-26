import { Email } from "../../../domain/value-objects/Email";
import { ExistingUserException } from "../../services/ExistingUserException";
import { UserMapper } from "../../mappers/UserMapper";
export class RegisterUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(input) {
        const email = new Email(input.email);
        const existingUser = await this.repository.findByEmail(email);
        if (existingUser)
            throw new ExistingUserException('User already exists', 400);
        const user = UserMapper.toDomain(input);
        await this.repository.save(user);
    }
}
