import { User } from "../../domain/entities/Veterinary";
import { Email } from "../../domain/value-objects/Email";
export class UserMapper {
    static toDomain(dto) {
        return new User(dto.name, new Email(dto.email), dto.password, dto.phone);
    }
}
