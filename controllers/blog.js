const express = require('express');
//const router = express.Router();
const multer= require('multer');
const path = require('path')
const blogModels = require('../models/blog.js');
 
//images
const storage=multer.diskStorage({
   //  destination: (req, file, cb) => {
     //   cb(null, 'Images')
    // },
    //filename:(req,file,cb)=>{
     //    console.log(file)
     //   cb(null, Date.now() + path.extname(file.originalname));
   // }
   destination:"uploads",
   filename:(req, file, cb)=>{
    cb(null, file.originalname);
   }
}) 
const upload = multer({
    storage: storage
})




//view all the blogs
const getblogs=async(req,res)=>{
    console.log("ENTERED GET BLOG")
    try{
    const blog=await blogModels.find();
    console.log("BLOG: ", blog)
    res.status(200).json(blog)
    }
    catch(err){
        res.json({message:err})
    }
}

//add new blog
const postblogs=async(req,res)=>{
    try{
    if(!req.body){
        return res.status(400).json({message:"Error"})
    }
    else{
        console.log(req.file.path)
        const blogg=await blogModels.create({
        title:req.body.title,
        description:req.body.description,
        comment:req.body.comment,
        date:req.body.date,
        image: {
            data:req.file.path,
            contentType: "image.jpg" || "image.png" || "image.svg" || "image.jpeg",
        }
            })
       return res.status(200).json(blogg)
    }}
    catch(err){
        console.log("error ",err)
    }
}

//delete a blog
const deleteblogs=async(req,res)=>{
    const blogdel= await blogModels.findById(req.params.id);
    if(!blogdel){
        res.status(400)
        res.send({status:404, 
           error:true, 
            message:`Error`})
             }
     else{
        await blogdel.remove();
        res.status(200).json({id:req.params.id});
    }
 }

 //update blogscontentType: "image.jpg" || "image.png" || "image.svg" || "image.jpeg",
 const updateblogs=async(req, res)=> {

    const blogupd= await blogModels.findById(req.params.id);
    if(!blogupd){
        res.status(400)
        res.send({status:404, 
           error:true, 
            message:`Error`})
    }
    else{

        blogupd.title=req.body.title,
        blogupd.image={
            data:req.file.path,
            contentType: "image.jpg" || "image.png" || "image.svg" || "image.jpeg",
        }
        blogupd.description=req.body.description,
        blogupd.comment=req.body.comment,
        blogupd.date=req.body.date

        const upd= await blogupd.save()
        res.status(200).json(upd);
    }
    
 }

module.exports={
   // router,
    getblogs,
    postblogs,
    deleteblogs,
    updateblogs,
    upload
}