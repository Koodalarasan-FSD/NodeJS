// NodeJS Tutorial - Microtask Queues - https://www.youtube.com/watch?v=M3sbOSJvhxg&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=43&pp=iAQB 

/*

MicroTask Queue Experiment 1 Inteference:
All user written synchronous JavaScript code takes priority over async code that the runtime would like to
eventually execute.

*/
console.log("console.log 1");
process.nextTick(() => console.log("this is process.next 1"));
console.log('console.log 2');


