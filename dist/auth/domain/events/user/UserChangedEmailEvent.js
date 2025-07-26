import { UserEvent } from "./UserEvent";
export class UserChangedEmailEvent extends UserEvent {
    constructor(vet_id, oldEmail, newEmail, occurredAt) {
        super(vet_id, occurredAt);
        this.oldEmail = oldEmail;
        this.newEmail = newEmail;
    }
    getEventDescription() {
        return `User changed his email from ${this.oldEmail} to ${this.newEmail}`;
    }
    getEventTime() {
        return this.occurredAt.toISOString();
    }
}
