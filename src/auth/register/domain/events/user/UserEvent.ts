export abstract class UserEvent{
  public readonly vet_id: number
  public readonly occurredAt: Date
  constructor(vet_id: number, occurredAt: Date){
    this.vet_id = vet_id
    this.occurredAt = occurredAt ?? new Date()
  }
  abstract getEventDescription(): string
  abstract getEventTime(): string
}