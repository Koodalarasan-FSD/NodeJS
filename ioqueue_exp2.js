//  NodeJS Tutorial - I/O Queue - https://www.youtube.com/watch?v=RWCC4aWMlGw&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=45&pp=iAQB

/* 
I/O Queue Experiment Inference:
    - When running setTimeout with delay 0ms and I/O async method, the order of execution can never be guaranteed.
*/

const fs = require('fs');

setTimeout( () => console.log("this is setTimeout 1"),0);

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
});
