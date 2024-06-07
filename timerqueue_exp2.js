// NodeJS Tutorial - Timer Queues - https://www.youtube.com/watch?v=0eLD_uf8ieo&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=44&pp=iAQB

// Timer Queue Experiment 2(5) - continuation of microtaskqueue_exp3.js
/*
  Experiment Inference:
    - Callbacks in microtask queues are executed in between the execution of callbacks in the timer queue.
*/
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
    console.log("this is setTimeout 2");
    process.nextTick(() =>
        console.log("this is the inner next tick inside setTimeout")
    );
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

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
