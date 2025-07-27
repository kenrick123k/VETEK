import { UserEvent } from "./UserEvent";

export class UserChangedPasswordEvent extends UserEvent{
  private readonly newPassword: string

  constructor(vet_id: number, newPassword: string, occurredAt: Date){
    super(vet_id, occurredAt)
    this.newPassword = newPassword
  }
  getEventDescription(): string {
      return `User changed his password...`
  }
  getEventTime(): string {
      return this.occurredAt.toISOString()
  }

}