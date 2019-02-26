"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port_1 = require("./port");
var app = express();
app.listen(port_1.default, function (req, res) {
    console.log("server is running at port " + port_1.default);
});
app.get('/', function (req, res) {
    return res.status(200).send("Hellow friend server is running at port " + port_1.default);
});
