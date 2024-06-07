// NodeJS Tutorial - Cluster Module - https://www.youtube.com/watch?v=SHR-KmfRIsU&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=61

// Please check cluster.js also.
/*
Cluster Module:
    - Node is single-threaded.
    - No matter how many cores you have, node only uses a single core of you CPU.
    - This is fine for I/O operations but if the code has a long running and CPU intensive operations, your 
      application might struggle from a performance point of view.
    - The Cluster module enables the creation of child processes(also called workers) that run
      simultaneously.
    - All created workers share the same server port.
*/

// no-cluster:
const http = require('http');  // Importing built-in http module

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end('Home page');
    }
    else if (req.url === '/slow-page') {
        for (let i = 0; i < 6000000000; i++) { }  // Simulate CPU work
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Slow Page");
    }
});

server.listen(8000, () => console.log("Server is running on port 8000"));

/*
    - Master is only in charge of the workers.
    - Workers are in charge of handling incoming requests, reading files etc.,
    - Each worker get its own event loop, memory and V8 instance.
*/