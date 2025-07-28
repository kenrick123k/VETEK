import { UserEvent } from "./UserEvent";
export class UserCreatedEvent extends UserEvent {
    constructor(vet_id, occurredAt) {
        super(vet_id, occurredAt);
    }
    getEventDescription() {
        return `User created`;
    }
    getEventTime() {
        return this.occurredAt.toISOString();
    }
}
