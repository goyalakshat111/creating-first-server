const http = require("http");

const port = 8081;

const toDoList = ["Complete Node Byte", "Play Cricket"];

http
    .createServer((req, res) => {
        const { method, url } = req;
        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(toDoList.toString());                      // convert array to string and content responded from server
            } else if (method === "POST") {
                let body = "";
                req.on("error", (err) => {                  // when user request , error state is for showing error
                    console.error(err);
                }).on("data", (chunk) => {
                    body += chunk;                                     // add chunks to body
                }).on("end", () => {
                    body = JSON.parse(body);                  // convert chunk (string format) to json format
                    console.log("data :", body);
                });

            } else {
                res.writeHead(501);                      // give error
            }
        } else {
            res.writeHead(404);
        }

        res.end();
    })

    .listen(port, () => {
        console.log(`NodeJs server started on port ${port}`);
    });

// http://localhost:8081