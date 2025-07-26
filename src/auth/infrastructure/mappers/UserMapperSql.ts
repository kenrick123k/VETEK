import { User } from "../../domain/entities/Veterinary";
import { Email } from "../../domain/value-objects/Email";
export class UserMapperSql{
  static toDomain(row: any){
    return new User(
      row.name,
      new Email(row.email),
      row.password,
      row.phone
    )
  }
}