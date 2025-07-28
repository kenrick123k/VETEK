import { UserEvent } from "./UserEvent";
export class UserChangedNameEvent extends UserEvent {
    constructor(vet_id, oldName, newName, occurredAt) {
        super(vet_id, occurredAt);
        this.oldName = oldName;
        this.newName = newName;
    }
    getEventDescription() {
        return `User changed his name from ${this.oldName} to ${this.newName}`;
    }
    getEventTime() {
        return this.occurredAt.toISOString();
    }
}
