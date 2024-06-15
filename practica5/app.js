"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_1 = require("./src/routes/routes");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
app.use(express_1.default.json());
app.use(routes_1.default);
mongoose_1.default
    .connect(MONGODB_URI, {})
    .then(function () {
    console.log('MongoDB connected');
    app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
})
    .catch(function (error) { return console.error('MongoDB connection error:', error.message); });
