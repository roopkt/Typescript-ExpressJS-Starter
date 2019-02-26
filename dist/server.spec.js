"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var port_1 = require("./port");
var server = require("./server");
var endpoint = "http://localhost:" + port_1.default + "/";
describe('Hello world server', function () {
    beforeEach(function () {
        server;
    });
    describe('GET', function () {
        it('returns status code 200', function (done) {
            request.get(endpoint, function (error, response) {
                console.log('runing', response.statusCode);
                expect(response.statusCode).toBe(210);
                done();
            });
        }, 250);
    });
});
