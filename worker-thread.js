// NodeJS Tutorial - Workers Threads Module - https://www.youtube.com/watch?v=Wm4MZwfEZd4&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=62

const { parentPort } = require('worker_threads');

let j = 0;
for (let i = 0; i < 6000000000; i++) {
    j++;
}

parentPort.postMessage(j);