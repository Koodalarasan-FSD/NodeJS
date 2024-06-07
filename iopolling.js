//  NodeJS Tutorial - I/O Polling - https://www.youtube.com/watch?v=tVWFg6y6Wdg&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=46&pp=iAQB 

/* 

Check Queue
    - To queue a callback function into the check queue, we can use a function called setImmediate.

I/O Polling - I/O Queue Experiment Inference
    - I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete.

*/

const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));

for (let i = 0; i < 200000000; i++) { }