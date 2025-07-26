import { UserRepository } from "../../../domain/repositories/UserRepository";
import { RegisterUserDTO } from "../../dtos/User/RegisterUserDTO";
import { Email } from "../../../domain/value-objects/Email";
import { ExistingUserException } from "../../services/ExistingUserException";
import { User } from "../../../domain/entities/Veterinary";
import { UserCreatedEvent } from "../../../domain/events/user/UserCreatedEvent";
import { UserMapper } from "../../mappers/UserMapper";

export class RegisterUserUseCase{
  private readonly repository: UserRepository
  constructor(repository: UserRepository){
    this.repository = repository
  }

  async execute(input: RegisterUserDTO): Promise<void>{
    const email = new Email(input.email)

    const existingUser = await this.repository.findByEmail(email)
    if(existingUser) throw new ExistingUserException('User already exists', 400)

    const user = UserMapper.toDomain(input)
    await this.repository.save(user)
  }
}