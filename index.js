const express = require("express");
const app = express();


const usersController = require("./usersController")
const productsController = require("./productsController")
const ordersController = require("./ordersController")

app.use("/users", usersController);
app.use("/products", productsController);
app.use("/orders", ordersController);
