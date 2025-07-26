import { User } from "../../domain/entities/Veterinary";
import { Email } from "../../domain/value-objects/Email";
import { RegisterUserDTO } from "../dtos/User/RegisterUserDTO";
export class UserMapper{
  static toDomain(dto: RegisterUserDTO){
    return new User(
      dto.name,
      new Email(dto.email),
      dto.password,
      dto.phone
    )
  }
}