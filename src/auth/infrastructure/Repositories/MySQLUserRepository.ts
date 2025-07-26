import { User } from "../../domain/entities/Veterinary";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { pool } from "../Database/MySQL/MySQLConnection";
import { RowDataPacket } from "mysql2/promise";
import { Email } from "../../domain/value-objects/Email";
import { UserMapper } from "../../application/mappers/UserMapper";
import { UserMapperSql } from "../mappers/UserMapperSql";
import { UserRaw } from "../types/UserRaw";
import { UserResponseDTO } from "../../application/dtos/User/UserResponseDTO";

export class UserRepositoryImpl implements UserRepository{
  async save(user: User): Promise<void> {
    const query = 'INSERT INTO veterinary (name, email, password, phone) VALUES (?,?,?,?)'
    const { name, email, password, phone } = user
    await pool.execute(query, [name, email, password, phone])
  }
  async findByID(vet_id: number): Promise<User | null> {
    const query = 'SELECT name, email, password, phone FROM veterinary WHERE vet_id= ?'
    const [rows] = await pool.execute<RowDataPacket[]>(query, [vet_id])
    if(rows.length===0) return null
    const rawUser = rows[0] as UserRaw
    const user = UserMapperSql.toDomain(rawUser)
    return user
  }
  async findByEmail(email: Email): Promise<User | null> {
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