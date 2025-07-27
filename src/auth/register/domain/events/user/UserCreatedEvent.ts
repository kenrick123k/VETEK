import { UserEvent } from "./UserEvent"
export class UserCreatedEvent extends UserEvent{

  constructor(vet_id: number, occurredAt: Date){
    super(vet_id, occurredAt)
  }
  getEventDescription(): string {
    return `User created`
  }
  getEventTime(): string {
    return this.occurredAt.toISOString()
  }
}