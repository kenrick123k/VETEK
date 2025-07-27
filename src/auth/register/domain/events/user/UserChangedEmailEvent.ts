import { Email } from "../../value-objects/Email"
import { UserEvent } from "./UserEvent"
export class UserChangedEmailEvent extends UserEvent{
  private readonly oldEmail: Email
  private readonly newEmail: Email

  constructor(vet_id: number, oldEmail: Email, newEmail: Email, occurredAt: Date){
    super(vet_id, occurredAt)
    this.oldEmail = oldEmail
    this.newEmail = newEmail
  }
  getEventDescription(): string {
      return `User changed his email from ${this.oldEmail} to ${this.newEmail}`
  }
  getEventTime(): string {
      return this.occurredAt.toISOString()
  }
}