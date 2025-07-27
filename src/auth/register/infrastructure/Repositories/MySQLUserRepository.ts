import { RowDataPacket } from "mysql2/promise";
import { User } from "../../domain/entities/Veterinary.js";
import { UserRepository } from "../../domain/repositories/UserRepository.js";
import { pool } from "../Database/MySQL/MySQLConnection.js";
import { UserMapperSql } from "../mappers/UserMapperSql.js";
import { UserRaw } from "../types/UserRaw.js";

export class UserRepositoryImpl implements UserRepository{
  async save(user: User): Promise<void> {
    const query = 'INSERT INTO veterinary (name, email, password, phone) VALUES (?,?,?,?)'
    const { name, email, password, phone } = user
    await pool.execute(query, [name, email.value, password, phone])
  }
  async findByID(vet_id: number): Promise<User | null> {
    const query = 'SELECT name, email, password, phone FROM veterinary WHERE vet_id= ?'
    const [rows] = await pool.execute<RowDataPacket[]>(query, [vet_id])
    if(rows.length===0) return null
    const rawUser = rows[0] as UserRaw
    const user = UserMapperSql.toDomain(rawUser)
    return user
  }
  async findByEmail(email: string): Promise<User | null> {
    const query = 'SELECT name, email, password, phone FROM veterinary WHERE email= ?'
    const [rows] = await pool.execute<RowDataPacket[]>(query, [email])
    if(rows.length===0) return null
    const rawUser = rows[0] as UserRaw
    const user = UserMapperSql.toDomain(rawUser)
    return user
  }
  async findByPhone(phone: string): Promise<User | null> {
    const query = 'SELECT name, email, password, phone FROM veterinary WHERE phone= ?'
    const [rows] = await pool.execute<RowDataPacket[]>(query, [phone])
    if(rows.length===0) return null
    const rawUser = rows[0] as UserRaw
    const user = UserMapperSql.toDomain(rawUser)
    return user
  }
}