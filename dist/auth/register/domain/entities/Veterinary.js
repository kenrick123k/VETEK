export class User {
    constructor(name, email, password, phone) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
    changeName(name) { this.name = name; }
    changeEmail(email) { this.email = email; }
    changePassword(password) { this.password = password; }
    changePhone(phone) { this.phone = phone; }
}
