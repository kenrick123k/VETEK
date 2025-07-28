import { UserEvent } from "./UserEvent";
export class UserChangedPhoneEvent extends UserEvent {
    constructor(vet_id, oldPhone, newPhone, occurredAt) {
        super(vet_id, occurredAt);
        this.oldPhone = oldPhone;
        this.newPhone = newPhone;
    }
    getEventDescription() {
        return `User changed his phone number from ${this.oldPhone} to ${this.newPhone}`;
    }
    getEventTime() {
        return this.occurredAt.toISOString();
    }
}
