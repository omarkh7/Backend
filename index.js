const express = require('express')
const app= express()
const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./configure/db.js");
const cors = require('cors');
const bodyparser = require("body-parser");
// const contactUs = require("./routes/contactUs.js");
const infoRouter = require("./routes/info.js")


mongoose.set("strictQuery", true);
app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(cors());
connection();
// app.use('/cont',contactUs)

const conn = mongoose.connection;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


app.use("/info", infoRouter);
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));


    
