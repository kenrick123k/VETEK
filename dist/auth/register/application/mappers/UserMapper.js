import { User } from "../../domain/entities/Veterinary.js";
import { Email } from "../../domain/value-objects/Email.js";
export class UserMapper {
    static toDomain(dto) {
        return new User(dto.name, new Email(dto.email), dto.password, dto.phone);
    }
}
