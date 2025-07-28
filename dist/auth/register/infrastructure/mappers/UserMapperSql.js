import { User } from "../../domain/entities/Veterinary.js";
import { Email } from "../../domain/value-objects/Email.js";
export class UserMapperSql {
    static toDomain(row) {
        return new User(row.name, new Email(row.email), row.password, row.phone);
    }
}
