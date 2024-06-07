// NodeJS Tutorial - Workers Threads Module - https://www.youtube.com/watch?v=Wm4MZwfEZd4&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=62

/*
Worker Threads Module:
    - The worker_threads module enables the use of threads that execute JavaScript in parallel.
    - Code executed in a worker thread runs in a separate child process, preventing it from blocking your 
      main application.
    - The Cluster module can be used to run multiple instance of Node.js that can distribute workloads.
    - worker_thread module allows running multiple application threads within a single Node.js instance.
    - When process isolation is not needed, that is, no separate instances of V8, event loop and memory are
      needed, you should use worker_threads.
*/

// Worker Threads Module:
const http = require('http'); // Importing built-in http module
const { Worker } = require('worker_threads'); // Importing built-in worker_threads module

const server = http.createServer((req, res) => {
    if (req.url === '/') 
    {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end('Home page');
    }
    else if (req.url === '/slow-page') 
    {

        const worker = new Worker('./worker-thread.js');
        worker.on("message", (j) => {

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Slow Page ${j}`);

        })

    }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
