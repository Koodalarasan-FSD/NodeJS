//  NodeJS Tutorial - I/O Queue - https://www.youtube.com/watch?v=RWCC4aWMlGw&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=45&pp=iAQB

/* 

I/O Queue Experiment Inference:
    - I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks.

*/

const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 200000000; i++) { }