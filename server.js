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
            }
            else if (method === "POST") {
                let body = "";
                req.on("error", (err) => {                  // when user request , error state is for showing error
                    console.error(err);
                })
                    .on("data", (chunk) => {
                        body += chunk;                                     // add chunks to body
                    })
                    .on("end", () => {
                        body = JSON.parse(body);                  // convert chunk (string format) to json format
                        // console.log("data :", body);

                        // ************Day -27 Adding new routes to server**************
                        let newToDo = toDoList;     // data is not saved to server , whenever we refresh
                        newToDo.push(body.item);    // it is back to the the initial state. That's why we
                        console.log(newToDo);       // use database
                        res.writeHead(201);
                    });

            }
            else if (method === "DELETE") {
                let body = "";
                req.on("error", (err) => {
                    console.error(err);
                })
                    .on("data", (chunk) => {
                        body += chunk;
                    })
                    .on("end", () => {
                        body = JSON.parse(body);
                        let deleteThis = body.item;

                        for (let i = 0; i < toDoList.length; i++) {
                            if (toDoList[i] === deleteThis) {
                                toDoList.splice(i, 1);
                                break;
                            }
                        }

                        // toDoList.find((element, index) => {
                        //     if (element === deleteThis) {
                        //       toDoList.splice(index, 1);
                        //     }
                        //   });
                        res.writeHead(204);
                    });

            }
            else {
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