const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app.js");

require('dotenv').config;

// Connecting to MongoDB before each test
beforeEach(async () => {
    await mongoose.connect(process.env)
    .then(
    () => (console.log("Connection to DB established via jest")),
    err => {console.log("Failed to establish connection to DB via jest", err)}
    )
});

// Close Connection with MongoDB

afterEach(async () => {
    await mongoose.connection.close();
});