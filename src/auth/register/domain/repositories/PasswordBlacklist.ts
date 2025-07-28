export interface PasswordBlacklist{
  isNotBlacklisted(password: string): Promise<boolean>
}