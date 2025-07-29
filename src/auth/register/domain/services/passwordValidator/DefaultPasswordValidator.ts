import { PasswordValidator } from "./PasswordValidator";
import { PasswordBlacklist } from "../../repositories/PasswordBlacklist";
import { MinLengthException } from "../../exceptions/WeakPassword/MinLengthException.js";
import { UppercaseException } from "../../exceptions/WeakPassword/UppercaseException.js";
import { LowercaseException } from "../../exceptions/WeakPassword/LowercaseException.js";
import { DigitException } from "../../exceptions/WeakPassword/DigitException.js";
import { SpecialCharException } from "../../exceptions/WeakPassword/SpecialCharException.js";
import { BlackListException } from "../../exceptions/WeakPassword/BlacklistException.js";
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
  async isStrong(password: string): Promise<void> {
    if(!this.meetsMinLength(password, 8)) throw new MinLengthException('Password must have 8 characters as a minimum requirement', 406)
    if(!this.hasUppercase(password)) throw new UppercaseException('Password must have an uppercase character as a minimum requirement', 406)
    if(!this.hasLowercase(password)) throw new LowercaseException('Password must have a lowercase character as a minimum requirement')
    if(!this.hasDigit(password)) throw new DigitException('Password must have a digit as a minimum requirement')
    if(!this.hasSpecialChar(password)) throw new SpecialCharException('Password must have a special character as a minimum requirement')
    if(!(await this.blacklistService.isNotBlacklisted(password))) throw new BlackListException('Password is blacklisted', 406)
  }
}