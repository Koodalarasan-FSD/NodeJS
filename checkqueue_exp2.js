//  NodeJS Tutorial - Check Queue - https://www.youtube.com/watch?v=6Mu_bhHmh2Q&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=47&pp=iAQB

/*

Check Queue Experiment Inference:
    - Microtask queues callbacks are executed in between check queues callbacks.

*/

setImmediate(()=>console.log("this is setImmediate 1"));
setImmediate(()=>{
    
    console.log("this is setImmediate 2");
    process.nextTick(()=>console.log("this is process.nextTick 1"));
    Promise.resolve().then(()=>console.log("this is Promise.resolve 1"));

});
setImmediate(()=>console.log("this is setImmediate 3"));