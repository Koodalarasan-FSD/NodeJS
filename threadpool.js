// NodeJS Tutorial - Thread Pool - https://www.youtube.com/watch?v=I1sqnbJ1Fno&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=39&pp=iAQB
// NodeJS Tutorial - Thread Pool Size - https://www.youtube.com/watch?v=3JYNNf3Iljo&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=40&pp=iAQB

/*
Threadpool:
- Main thread:
    - "Hey libuv, i need to read file contents but that is a time consuming task.  I don't want to block 
       further code from being executed during this time. Can i offload this task to you?"
- Libuv:
    - "Sure, main thread. Unlike you, who is single threaded, i have a pool of threads that i can use to run
       some of these time consuming tasks.  When the task is done, the file contents are retrieved and the 
       associated callback function can be run."

- Libuv's thread pool has 4 threads.
*/

const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 6;
const MAX_CALLS = 3;

const start = Date.now()
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}

/*
const start = Date.now();
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")

console.log("Hash:", Date.now() - start);
*/
