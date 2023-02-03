const express = require('express');

const router = express.Router();

const multer = require('multer');

//const blogControllers = require('../controllers/blog.js');
module.exports=router;


const {getblogs,postblogs,deleteblogs,upload, updateblogs}=require("../controllers/blog.js");
//const {upload}=require("../controllers/blog.js")


router.get("/getblog",getblogs)
router.post("/postblog",upload.single("image"),postblogs)
router.delete("/deleteblog/:id",deleteblogs)
router.put("/updateblog/:id",upload.single("image"),updateblogs)



module.exports=router;

