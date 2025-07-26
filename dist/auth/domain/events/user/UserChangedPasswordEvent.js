import { UserEvent } from "./UserEvent";
export class UserChangedPasswordEvent extends UserEvent {
    constructor(vet_id, newPassword, occurredAt) {
        super(vet_id, occurredAt);
        this.newPassword = newPassword;
    }
    getEventDescription() {
        return `User changed his password...`;
    }
    getEventTime() {
        return this.occurredAt.toISOString();
    }
}
