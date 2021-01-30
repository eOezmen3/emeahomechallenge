const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

const books = require("./routes/books/books");
const server = express();

//accept only JSON
server.use(bodyParser.json());
server.use(cors());
server.use(compression());

// healthcheck API
server.get("/api/ping", (req, res) => res.send("pong"));

server.use("/api", books);

//set port and log to the console
server.listen(3000, () => console.log("server listening"));
