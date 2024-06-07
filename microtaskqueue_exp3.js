// NodeJS Tutorial - Microtask Queues - https://www.youtube.com/watch?v=M3sbOSJvhxg&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=43&pp=iAQB 

// MicroTask Queue Experiment 3
process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() =>
        console.log('this is the inner next tick inside next tick')
    );
});
process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2");
    process.nextTick(() =>
        console.log("this is the inner next tick inside Promise then block")
    );
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

/*
process.nextTick():

    - Use of process.nextTick is discouraged as it can cause the rest of the event loop to starve.
    - If you endlessly call process.nextTick. the control will never make it past the microtask queue.

Two main reasons to use process.nextTick():
    1. To allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again
       before the event loop continues.
    2. To allow a callback to run after the call stack has unwound but before the event loop continues.

*/