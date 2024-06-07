// NodeJS Tutorial - Timer Queues - https://www.youtube.com/watch?v=0eLD_uf8ieo&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=44&pp=iAQB

// Timer Queue Experiment 3(6) - continuation of microtaskqueue_exp3.js
/*
  Experiment Inference:
    - Timer queue callbacks are executed in FIFO Folder.
*/
setTimeout(() => console.log("this is setTimeout 1"), 1000);
setTimeout(() => console.log("this is setTimeout 2"), 500);
setTimeout(() => console.log("this is setTimeout 3"), 0);

