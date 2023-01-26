// const dotenv=require("dotenv")
// dotenv.config();
// const mongoose = require("mongoose");
// const connection = require("./configure/db.js");
// const express = require("express");
// const app = express();



import express  from "express";
import mongoose from "mongoose";
import dotenv   from 'dotenv';
import morgan from "morgan";
import connection from "./configure/db.js";
import infoRouter from "./routes/info.js";
// const infoRouter = require ("./routes/info.js");

const app = new express();
mongoose.set("strictQuery", true);

dotenv.config();
connection();


if (process.env.Node_ENV === 'development'){
    app.use(morgan('dev'));
}

const conn = mongoose.connection;
app.use(express.json());


app.use('/info', infoRouter);

const port = process.env.PORT || 5000;

app.listen(port,
console.log(`Server Running in ${process.env.Node_ENV} mode one Port ${port}`));



