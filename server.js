const http = require("http");             // package import

const port = 8081;                 // local port number

http
    .createServer((request, response) => {
        // callback function
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1> Hello, This is from my Server </h1>");
        response.end();
    })

    .listen(port, () => {
        //callback function
        console.log(`NodeJs server started on port ${port}`);
    });

// http://localhost:8081