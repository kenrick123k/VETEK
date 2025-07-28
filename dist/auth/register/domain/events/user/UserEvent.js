export class UserEvent {
    constructor(vet_id, occurredAt) {
        this.vet_id = vet_id;
        this.occurredAt = occurredAt ?? new Date();
    }
}
