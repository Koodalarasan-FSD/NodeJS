//  NodeJS Tutorial - Close Queue - https://www.youtube.com/watch?v=XmOc2fCTKeQ&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=48&pp=iAQB

/* 

Close Queue Experiment Inference:
    - Close Queue callbacks are executed after all other queues callbacks in a given iteration of the event lookup. 

*/

const fs = require('fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("this is from readableStream close event callback");
});
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log('this is process.nextTick 1'));

/* 
Event Loop Summaries:
    - The event loop is a C program that orchestrates or co-ordinates the execution of synchronous 
      and asynchronous and asynchronous code in Node.js
    - It co-ordinates the execution of callbacks in six different queues.
    - They are nextTick, Promise, timer, I/O, check and close queues.
    - We use process.nextTick() method to queue into the nextTick queue.
    - We resolve or reject a Promise to queue into the Promise queue.
    - We use setTimeout or setInterval to queue into the timer queue.
    - Execute an async method to queue into the I/O queue.
    - Use setImmediate function to queue into the check queue and finally/
    - Attach close event listeners to queue into the close queue.
    - The order of execution follows the same order listed here.
    - nextTick and Promise queues are executed in between each queue and also in between each callback
      execution in the timer and check queues.
*/