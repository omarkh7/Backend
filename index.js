const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./configure/db.js");
const express = require("express");
const bodyparser = require("body-parser");
const contactUs = require("./routes/contactUs.js");
const app = express();


mongoose.set("strictQuery", true);
app.use(express.json())
app.use(express.urlencoded({ extended:false }));
connection();
app.use('/cont',contactUs)
const conn = mongoose.connection;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));

