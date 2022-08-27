const http = require("http");

const port = 8081;

http
    .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1> Hello, This is from my Server </h1>");
        response.end();
    })

    .listen(port, () => {
        console.log(`NodeJs server started on port ${port}`);
    });

// http://localhost:8081