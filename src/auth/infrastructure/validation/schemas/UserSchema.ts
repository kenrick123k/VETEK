import z from 'zod'
import { User } from '../../../domain/entities/Veterinary'
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/
const phoneRegex = /^\+?[\d\s\-()]{7,15}$/

export const UserSchema = z.object({
  name: z
  .string()
  .min(2, 'Name must have at least 2 characters')
  .max(30, 'Name must have a maximum of 30  characters')
  .regex(nameRegex, 'Name must not contain special characters'),

  email: z
  .string()
  .email('Invalid Email')
  .min(5, 'Email must have at least 5 characters')
  .max(50, 'Email must have a maximum of 50  characters'),

  password: z
  .string()
  .min(10, 'Password must have at least 10 characters')
  .max(100, 'Password must have a maximum of 100 characters')
  .regex(passwordRegex, 'Password must contain uppercase, lowercase, number, special character and no spaces'),

  phone: z
  .string()
  .min(7, 'Phone must have at least 7 characters')
  .max(15, 'Phone must have a maximum of 15 characters')
  .regex(phoneRegex, 'Phone must contain only numbers and valid characters like +, -, () and spaces')
})

export async function checkUser(object: User){
  return UserSchema.safeParse(object)
}