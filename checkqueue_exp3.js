//  NodeJS Tutorial - Check Queue - https://www.youtube.com/watch?v=6Mu_bhHmh2Q&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=47&pp=iAQB

/*
Check Queue Experiment Inference:
    - When running setTimeout with delay 0ms and setImmediate method, the order of execution can never be
      guaranteed.

*/

setTimeout(() => console.log("this is setTimeout 1"), 0)
setImmediate(() => console.log("this is setImmediate 1"));
