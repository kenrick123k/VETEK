import { Email } from "../value-objects/Email";
export class User{
  public name: string
  public email: Email
  public password: string
  public phone: string

  constructor(
    name: string,
    email: Email,
    password: string,
    phone: string){
      this.name = name
      this.email = email
      this.password = password
      this.phone = phone
    }
    changeName(name: string){this.name = name}
    changeEmail(email: Email){this.email = email}
    changePassword(password: string){this.password = password}
    changePhone(phone: string){this.phone = phone}
}