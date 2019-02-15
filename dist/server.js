"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = 4345;
var app = express();
app.listen(port, function (req, res) {
    console.log("server is running at port " + port);
});
app.get('/', function (req, res) {
    return res.send("Hellow friend server is running at port " + port);
});
