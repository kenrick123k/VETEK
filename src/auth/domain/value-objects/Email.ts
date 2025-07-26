export class Email{
  public readonly value: string

  constructor(value: string){
    if(!this.isValid(value)) throw new Error('Invalid email')
    this.value = value.toLowerCase()
  }
  private isValid(email: string): boolean{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
}