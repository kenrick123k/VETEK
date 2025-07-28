export class Email {
    constructor(value) {
        if (!this.isValid(value))
            throw new Error('Invalid email');
        this.value = value.toLowerCase();
    }
    isValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
