export default class Address {
    constructor(data) {
        this.street = data.street;
      this.city = data.city;
      this.state = data.state;
      this.neighborhood = data.neighborhood;
      this.number = data.number;
      this.complement = data.complement;
    }
  }