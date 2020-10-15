const express = require("express");


const Pro = require("./pmodel");

const routerPro = express.Router();

routerPro.get("/", (res, req) => {});

routerPro.get("/:id", (res, req) => {});

routerPro.post("/", (res, req) => {});

routerPro.delete("/:id", (res, req) => {});


module.exports = routerPro;