// NodeJS Tutorial - Module.Exports vs Exports - https://www.youtube.com/watch?v=F_GmxjP80so&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=14&pp=iAQB

const obj1 = {
    name: "Bruce Wayne"
}

const obj2 = obj1
obj2.name = "Clark Kent"

console.log(obj1)