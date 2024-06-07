// NodeJS Tutorial - Extending from EventEmitter - https://www.youtube.com/watch?v=UK2uQjgsoI4&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=22&pp=iAQB

class DrinkMachine {
    serveDrink(size) {
        if (size === 'large') {
            console.log("Serving Complimentary Drink!")
        }
    }
}

module.exports = DrinkMachine