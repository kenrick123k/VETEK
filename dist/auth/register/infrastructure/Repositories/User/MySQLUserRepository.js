import { pool } from "../../Database/MySQL/MySQLConnection.js";
import { UserMapperSql } from "../../mappers/UserMapperSql.js";
export class UserRepositoryImpl {
    async save(user) {
        const query = 'INSERT INTO veterinary (name, email, password, phone) VALUES (?,?,?,?)';
        const { name, email, password, phone } = user;
        await pool.execute(query, [name, email.value, password, phone]);
    }
    async findByID(vet_id) {
        const query = 'SELECT name, email, password, phone FROM veterinary WHERE vet_id= ?';
        const [rows] = await pool.execute(query, [vet_id]);
        if (rows.length === 0)
            return null;
        const rawUser = rows[0];
        const user = UserMapperSql.toDomain(rawUser);
        return user;
    }
    async findByEmail(email) {
        const query = 'SELECT name, email, password, phone FROM veterinary WHERE email= ?';
        const [rows] = await pool.execute(query, [email]);
        if (rows.length === 0)
            return null;
        const rawUser = rows[0];
        const user = UserMapperSql.toDomain(rawUser);
        return user;
    }
    async findByPhone(phone) {
        const query = 'SELECT name, email, password, phone FROM veterinary WHERE phone= ?';
        const [rows] = await pool.execute(query, [phone]);
        if (rows.length === 0)
            return null;
        const rawUser = rows[0];
        const user = UserMapperSql.toDomain(rawUser);
        return user;
    }
}
