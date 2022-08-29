const express = require("express");

// Initialisation
const app = express();

app.use(express.json());       //  signifies whatever data transfer happen in our application,it'll happen in json format

const port = 8081;

const toDoList = ["Complete Node Byte", "Play Cricket"];

// http://localhost:8081/todos
app.get("/todos", (req, res) => {
    // callback
    res.status(200).send(toDoList);
})

app.post("/todos", (req, res) => {
    // callback
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added successfully"
    });
});

app.delete("/todos", (req, res) => {
    //callback
    const itemToDelete = req.body.item;

    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });

    res.status(202).send({
        message: `Deleted item - ${req.body.item}`,
    });
});


// put, patch etc other methods will cover in this
app.all("/todos", (req, res) => {
    res.status(501).send();
});

// for routes other than todos
app.all("*", (req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    // callback
    console.log(`NodeJS server started on port ${port}`);
});