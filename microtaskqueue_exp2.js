// NodeJS Tutorial - Microtask Queues - https://www.youtube.com/watch?v=M3sbOSJvhxg&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=43&pp=iAQB 

/*
MicroTask Queue Experiment 2 Inteference:
    - All callbacks in nextTick queue are executed before callbacks in promise queue.
*/

Promise.resolve().then(() => console.log('this is promise.resolve 1'));
process.nextTick(() => console.log('this is process.nextTick 1'));
