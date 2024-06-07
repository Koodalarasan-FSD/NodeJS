// NodeJS Tutorial - HTML Routing - https://www.youtube.com/watch?v=S1QOZU5jOcw&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=35&pp=iAQB

// HTML Routing
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Home Page");
    }

    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("About Page");
    }

    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
            JSON.stringify({
                firstName: "Bruce",
                lastName: "Wayne",
            }));

    }

    else {
        res.writeHead(404);
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Please type http://localhost:3000/ on browser.