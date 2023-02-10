const Info = require("../models/info.js");
const multer= require('multer');
const path = require('path');
const infoModels= require('../models/info.js');
const getAll = async (req, res) => {
  try {
    const infos = await Info.find({}).sort({ createdAt: -1 });
    res.status(200).json(infos);
  } catch (err) {
    res.json({ message: err });
  }
};

//images
const storage=multer.diskStorage({

  destination:"uploads",
  filename:(req, file, cb)=>{
   cb(null, file.originalname);
  }
}) 
const upload = multer({
   storage: storage
})

//get an info by id
const getOne = async (req, res, next) => {
  let { id } = req.params;
  try {
    const getoneinfo = await Info.findOne({ _id: id });

    res.status(200).json(getoneinfo);
  } catch (err) {
    res.send({ message: "Id is wrong try another Id"  });
  }
};

// creating new info

const post = async (req, res) => {
console.log(req.file)
  try{
    if(!req.body){
        return res.status(400).json({message:"Error"})
    }
    else{
      const infoo=await infoModels.create({
      info_title:req.body.info_title,
      info_description:req.body.info_description,
      info_category:req.body.info_category,
      info_date:req.body.info_date,
      info_image:req.file.path,
 
          })
          console.log(infoo.info_image)
     return res.status(200).json(infoo)
  }}
  catch(err){
      console.log("error ",err)
  }

};




 //update an info by _id
const updateInfo = async (req,res)=>{
const info = await Info.findById(req.params.id);
if(!info){
    res.status(400);
    throw new Error("Info not Found")
}

else{

  info.info_title=req.body.info_title,
  // info.info_image=req.file.path,
  
  info.info_description=req.body.info_description,
  info.info_category=req.body.info_category,
 info.info_date=req.body.info_date

 const upd= await info.save()
 res.status(200).json(upd);
} 
}



//delete an info by id
const deleteInfo = async (req, res) => {
  const infodel = await Info.findById(req.params.id);
  if (!infodel) {
    res.status(400);
    res.send({ status: 404, error: true, message: `Error` });
  } else {
    await infodel.remove();
    res.status(200).json({ id: req.params.id });
  }
};
//export all the function 
module.exports = {
  getAll,
  getOne,
  post,
  updateInfo,
  deleteInfo,
  upload,
};
