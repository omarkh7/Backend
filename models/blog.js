const mongoose = require("mongoose");
const blog=new mongoose.Schema({
    title:{
            type:String,
            require:true
        },
 image:{
      type:String,
      // contentType:String
},
   description:{
           type:String,
           require:true
        },
   comment:{
           type:String,
           require:true
        },
    date:{
           type:String,
           require:true
        },
  },
{
timestamps: true,
}
)
module.exports = mongoose.model("blogs", blog);