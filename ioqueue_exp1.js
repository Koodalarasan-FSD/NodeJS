//  NodeJS Tutorial - I/O Queue - https://www.youtube.com/watch?v=RWCC4aWMlGw&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=45&pp=iAQB

/* 
I/O Queue
    - Most of the async methods from the built-in modules queue the callback function in the I/O Queue.
I/O Queue Experiment Inference:
    - Callbacks in the microtask queues are executed before callbacks in the I/O Queue.
*/

const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));