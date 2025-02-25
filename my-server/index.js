const express = require("express"); // Gọi thư viện
const app = express();
const port = 3000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// TẠO API HOME + Req: Client gửi lên/ res: server gửi
app.get("/", (req, res) => {
    res.send("Hello Restful API");
});
app.listen(port, () => {
    console.log(`My Server listening on port ${port}`);
});

let database = [
    { "BookId": "b1", "BookName": "Kỹ thuật lập trình cơ bản", "Price": 70, "Image": "b1.png" },
    { "BookId": "b2", "BookName": "Kỹ thuật lập trình nâng cao", "Price": 100, "Image": "b2.png" },
    { "BookId": "b3", "BookName": "Máy học cơ bản", "Price": 200, "Image": "b3.png" },
    { "BookId": "b4", "BookName": "Máy học nâng cao", "Price": 300, "Image": "b4.png" },
    { "BookId": "b5", "BookName": "Lập trình Robot cơ bản", "Price": 250, "Image": "b5.png" },
];

app.get("/books", (req, res) => {
    res.send(database);
});

app.get("/books/:id", cors(), (req, res) => {
    id = req.params["id"];
    let p = database.find(x => x.BookId == id);
    res.send(p);
});

// Ex117
app.post("/books", cors(), (req, res) => {
    //put json book into database
    database.push(req.body);
    //send message to client(send all database to client)
    res.send(database);
});

//119
app.put("/books", cors(), (req, res) => {
    book = database.find(x => x.BookId == req.body.BookId);
    if (book != null) {
        book.BookName = req.body.BookName;
        book.Price = req.body.Price;
        book.Image = req.body.Image;
    }
    res.send(database);
});

//121
app.delete("/books/:id", cors(), (req, res) => {
    id = req.params["id"];
    database = database.filter(x => x.BookId !== id);
    res.send(database);
});
//124
