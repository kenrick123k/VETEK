import { PasswordValidator } from "./PasswordValidator";
import { PasswordBlacklist } from "../../repositories/PasswordBlacklist";

export class DefaultPasswordValidator implements PasswordValidator{
  private readonly blacklistService: PasswordBlacklist
  constructor(blacklistService: PasswordBlacklist){
    this.blacklistService = blacklistService
  }

  meetsMinLength(password: string, minLength: number): boolean{
    return password.length > minLength
  }
  hasUppercase(password: string): boolean{
    return /[A-Z]/.test(password)
  }
  hasLowercase(password: string): boolean {
    return /[a-z]/.test(password)
  }
  hasDigit(password: string): boolean {
    return /[0-9]/.test(password)
  }
  hasSpecialChar(password: string): boolean {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  }
  async isNotInBlacklist(password: string): Promise<boolean> {
      return (await this.blacklistService.isNotBlacklisted(password))
  }
  async isStrong(password: string): Promise<boolean> {
    const checks = [
    this.meetsMinLength(password, 8),
    this.hasUppercase(password),
    this.hasLowercase(password),
    this.hasDigit(password),
    this.hasSpecialChar(password),
    await this.isNotInBlacklist(password),
    ]
    return checks.every(Boolean)
  }
}