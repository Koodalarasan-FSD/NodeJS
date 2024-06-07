// NodeJS Tutorial - Extending from EventEmitter - https://www.youtube.com/watch?v=UK2uQjgsoI4&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=22&pp=iAQB

const EventEmitter = require("events");
class PizzaShop extends EventEmitter {

    constructor() {
        super();
        this.orderNumber = 0;
    }

    order() {
        this.orderNumber++;
        this.emit("order", size, topping);
    }

    displayorderNumber() {
        console.log(`Current order number: ${this.orderNumber}`);
    }
}

module.exports = PizzaShop