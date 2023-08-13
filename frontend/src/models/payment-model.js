export default class Payment {
    constructor(data) {
      this.id = data.id;
      this.fromUserId = data.fromUserId;
      this.toUserId = data.toUserId;
      this.amount = data.amount;
      this.method = data.method;
      this.date = new Date(data.date);
    }
  }