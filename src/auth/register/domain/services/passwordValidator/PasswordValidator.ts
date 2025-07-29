import { User } from "../../entities/Veterinary";
export interface PasswordValidator {
  meetsMinLength(password: string, minLength?: number): boolean;
  hasUppercase(password: string): boolean;
  hasLowercase(password: string): boolean;
  hasDigit(password: string): boolean;
  hasSpecialChar(password: string): boolean;
  isNotInBlacklist(password: string): Promise<boolean>;
  isStrong(password: string): Promise<void>;
}