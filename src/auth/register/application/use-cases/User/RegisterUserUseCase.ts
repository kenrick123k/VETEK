import { UserRepository } from "../../../domain/repositories/UserRepository.js";
import { PasswordValidator } from "../../../domain/services/passwordValidator/PasswordValidator.js";
import { Email } from "../../../domain/value-objects/Email.js";
import { RegisterUserDTO } from "../../dtos/User/RegisterUserDTO.js";
import { UserMapper } from "../../mappers/UserMapper.js";
import { ExistingUserException } from "../../exceptions/ExistingUserException.js";
import { WeakPasswordException } from "../../exceptions/WeakPasswordException.js";

export class RegisterUserUseCase{
  private readonly repository: UserRepository
  private readonly passwordValidator: PasswordValidator
  constructor(repository: UserRepository, passwordValidator: PasswordValidator){
    this.repository = repository
    this.passwordValidator = passwordValidator
  }

  async execute(input: RegisterUserDTO): Promise<void>{
    const email = new Email(input.email)
    const validPassword = await this.passwordValidator.isStrong(input.password)
    const existingUser = await this.repository.findByEmail(email.value)
    if(existingUser) throw new ExistingUserException('User already exists', 400)
    if(!validPassword) throw new WeakPasswordException('Password does not meet the minimum security requirements.', 406)
    const user = UserMapper.toDomain(input)
    await this.repository.save(user)
  }
}