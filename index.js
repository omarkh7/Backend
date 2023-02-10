const express = require('express')
const app= express()
const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./configure/db.js");
const multer = require('multer');
const cors = require('cors');
const bodyparser = require("body-parser");
const path = require('path')
const contactUs = require("./routes/contactUs.js");
const infoRouter = require("./routes/info.js")
const blogRouter = require("./routes/blog.js")
const userRouter= require("./routes/userRoutes.js")


mongoose.set("strictQuery", true);
app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(cors());

connection();

const conn = mongoose.connection;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use("/uploads", express.static('uploads'))
app.use('/uploads', express.static(path.join(__dirname, 'public')))



app.use("/info", infoRouter);
app.use("/blog", blogRouter);
app.use('/cont',contactUs);
app.use('/users',userRouter);

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));


    
