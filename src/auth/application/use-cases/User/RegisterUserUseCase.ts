import { UserRepository } from "../../../domain/repositories/UserRepository.js";
import { RegisterUserDTO } from "../../dtos/User/RegisterUserDTO.js";
import { Email } from "../../../domain/value-objects/Email.js";
import { ExistingUserException } from "../../services/ExistingUserException.js";
import { UserMapper } from "../../mappers/UserMapper.js";

export class RegisterUserUseCase{
  private readonly repository: UserRepository
  constructor(repository: UserRepository){
    this.repository = repository
  }

  async execute(input: RegisterUserDTO): Promise<void>{
    const email = new Email(input.email)
    console.log('llego al use case')
    const existingUser = await this.repository.findByEmail(email.value)
    if(existingUser) throw new ExistingUserException('User already exists', 400)

    const user = UserMapper.toDomain(input)
    await this.repository.save(user)
  }
}