// NodeJS Tutorial - Module Caching - https://www.youtube.com/watch?v=JQfOtwfDohY&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=13&pp=iAQB

class SuperHero {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
}

module.exports = new SuperHero("Superman")