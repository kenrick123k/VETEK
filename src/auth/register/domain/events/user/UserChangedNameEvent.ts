import { Email } from "../../value-objects/Email"
import { UserEvent } from "./UserEvent"
export class UserChangedNameEvent extends UserEvent{
  private readonly oldName: string
  private readonly newName: string
  constructor(vet_id: number, oldName: string, newName: string, occurredAt: Date){
    super(vet_id, occurredAt)
    this.oldName = oldName
    this.newName = newName
  }
  getEventDescription(): string {
    return `User changed his name from ${this.oldName} to ${this.newName}`
  }
  getEventTime(): string {
    return this.occurredAt.toISOString()
  }
}