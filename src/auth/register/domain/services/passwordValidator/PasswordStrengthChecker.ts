export interface PasswordValidator {
  isStrong(password: string): Promise<boolean>;
  meetsMinLength(password: string, length?: number): boolean;
  hasUppercase(password: string): boolean;
  hasLowercase(password: string): boolean;
  hasDigit(password: string): boolean;
  hasSpecialChar(password: string): boolean;
  isNotInBlacklist(password: string): Promise<boolean>;
  hasNoRepeatedChars(password: string, maxRepeat?: number): boolean;
  hasNoSequentialChars(password: string, maxSeqLength?: number): boolean;
  isNotSimilarToUserInfo(password: string, userInfo: { name?: string; email?: string }): boolean;
}