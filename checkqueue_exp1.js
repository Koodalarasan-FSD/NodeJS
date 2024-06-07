//  NodeJS Tutorial - Check Queue - https://www.youtube.com/watch?v=6Mu_bhHmh2Q&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=47&pp=iAQB

/*

Check Queue
    - To queue a callback function into the check queue, we can use a function called setImmediate.
Check Queue Experiment Inference:
    - Microtask Queues callbacks are executed after I/O callbacks and before check queue callbacks.

*/

const fs = require('fs');

fs.readFile(__filename, () => {
    
    console.log("this is readFile 1");
    setImmediate(() => console.log("this is setImmediate inside readFile"));
    process.nextTick(() =>
        console.log("this is process.nextTick inside readFile")
    );
    Promise.resolve().then(() =>
        console.log("this is Promise.resolve inside readFile")
    );

});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 200000000; i++) { }