import Address from "./address-model";

export default class Payment {
    constructor(data) {
        this.id = data.id;
        this.pictures = data.pictures;
        this.authorId = data.authorId;
        this.title = data.title;
        this.description = data.description;
        this.instrument = data.instrument
        this.price = data.price
        this.shipping = data.shipping
        this.status = data.status
        this.address = Address(data.address.street, data.address.city, data.address.state, data.address.neighborhood, data.address.number, data.address.complement)
        this.createdAt = new Date(data.createdAt);
    }
}