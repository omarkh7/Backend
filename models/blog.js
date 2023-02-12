const mongoose = require("mongoose");
const blog=new mongoose.Schema({
title:{
            type:String,
            // required:true
        },
 image:String,
   description:{
           type:String,
         //   required:true
        },
   comment:{
           type:String,
           
        },
    date:{
           type:String,
           
        },
        blog_url:{
         type:String,
         
      },
  },
{
timestamps: true,
}
)
module.exports = mongoose.model("blogs", blog);