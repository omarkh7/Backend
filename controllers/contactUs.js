const mongoose = require("mongoose");
const contactUs = require("../models/contactUs");

// get all contactinfo
const getallcontactinfo = async (req, res) => {
  const contacts = await contactUs.find({}).sort({ createdAt: -1 });
  res.status(200).json(contacts);
};



//add new contact
const postcontact=async(req,res)=>{
  console.log("zeinabbb")
try{
  if(!req.body){
      res.status(400).json({message:"Error"})
  }
  else{
      const contactt =await contactUs.create({

      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      subject:req.body.subject,
      message:req.body.message
      
          })
    return res.status(200).json(contactt)
  }}
catch(err){
  console.log("error", err)
}
}


// delete a contact by id
const deletecontactdetail = async (req, res) => {
  

  if (!mongoose.Types.ObjectId.isValid(req.params.id))  {
    return res.status(400).json({ error: "No such contact details" });
  }

  const index = await contactUs.findByIdAndRemove(req.params.id );

  if (!index) {
    return res.status(400).json({ error: "Contact details" });
  }
  res.status(200).json(index);
};

module.exports = {
  getallcontactinfo,
  postcontact,
  deletecontactdetail
};
