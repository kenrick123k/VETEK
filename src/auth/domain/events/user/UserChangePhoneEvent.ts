import { UserEvent } from "./UserEvent";

export class UserChangedPhoneEvent extends UserEvent{
  private readonly oldPhone: string
  private readonly newPhone: string

  constructor(vet_id: number, oldPhone: string, newPhone: string,occurredAt: Date){
    super(vet_id, occurredAt)
    this.oldPhone = oldPhone
    this.newPhone = newPhone
  }
  getEventDescription(): string {
      return `User changed his phone number from ${this.oldPhone} to ${this.newPhone}`
  }
  getEventTime(): string {
      return this.occurredAt.toISOString()
  }

}