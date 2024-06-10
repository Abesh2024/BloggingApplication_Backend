const express = require("express");
const nodemon = require("nodemon");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post")
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json())
app.use(authRoutes)
app.use(postRoutes)

mongoose.connect("mongodb://localhost:27017/authentication-app")
.then(() => console.log("DB Connection Successful"))
.catch((err) => console.log("DB Connection failed", err))



app.listen(4000, ()=> console.log("SERVER IS UP AND RUNNING ON PORT 4000"))
