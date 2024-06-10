const express = require("express");
const controllers = require("../controller/auth")
const routes = express.Router();

routes.post("/user-register", controllers.signUp)

routes.post("/user-login", controllers.logIn)

module.exports = routes;