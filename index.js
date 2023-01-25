const express = require('express')
const app= express()
const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./configure/db.js");
const multer = require('multer');
//const express = require("express");
//const app = express();
const blogRoutes= require("./routes/blog.js")
mongoose.set("strictQuery", true);


mongoose.set("strictQuery", true);
app.use(express.json())
app.use(express.urlencoded({extended:false}));


connection();
const conn = mongoose.connection;
app.use(express.json());
app.use('/info', blogRoutes)
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));

  app.get("/", (req, res) => {
      res.send('Helloassala');
     });

    
