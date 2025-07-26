import { User } from "../entities/Veterinary"
import { Email } from "../value-objects/Email"
export interface UserRepository{
  save(user: User): Promise<void>

  findByID(vet_id: number): Promise<User | null>
  findByEmail(email: Email): Promise<User | null>
  findByPhone(phone: string): Promise<User | null>
}