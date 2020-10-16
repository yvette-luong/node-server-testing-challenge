const express = require("express");
const morgan = require ("morgan");
const helmet = require ("helmet");

const proute = require("../database/projects/prouter")
const server = express();

server.use(express.json());
server.use("/", morgan("---creating API to test unit backend---"));
server.use("/", helmet());

server.use("/project", proute)
server.get("/project", (req, res, next ) =>{
    res.status(200).json({ api: "Server Unit Testing Challenge" })
    next();
});



module.exports = server