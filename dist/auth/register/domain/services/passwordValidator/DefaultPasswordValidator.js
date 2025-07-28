export class DefaultPasswordValidator {
    constructor(blacklistService) {
        this.blacklistService = blacklistService;
    }
    meetsMinLength(password, minLength) {
        return password.length > minLength;
    }
    hasUppercase(password) {
        return /[A-Z]/.test(password);
    }
    hasLowercase(password) {
        return /[a-z]/.test(password);
    }
    hasDigit(password) {
        return /[0-9]/.test(password);
    }
    hasSpecialChar(password) {
        return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    }
    async isNotInBlacklist(password) {
        return (await this.blacklistService.isNotBlacklisted(password));
    }
    async isStrong(password) {
        const checks = [
            this.meetsMinLength(password, 8),
            this.hasUppercase(password),
            this.hasLowercase(password),
            this.hasDigit(password),
            this.hasSpecialChar(password),
            await this.isNotInBlacklist(password),
        ];
        return checks.every(Boolean);
    }
}
