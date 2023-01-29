const mongoose = require("mongoose");
const contactUs = require("../models/contactUs");

// get all contactinfo
const getallcontactinfo = async (req, res) => {
  const contacts = await contactUs.find({}).sort({ createdAt: -1 });
  res.status(200).json(contacts);
};

// get a single contact info
// const getsinglecontactinfo = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const contactUs = await contactUs.findById(id)

//   if (!contactUs) {
//     return res.status(404).json({error: 'No such workout'})
//   }


//add new contact
const postcontact=async(req,res)=>{
try{
  if(!req.body){
      res.status(400).json({message:"Error"})
  }
  else{
      const contactt =await contactUs.create({
      name:req.body.name,
      email:req.body.email,
      subject:req.body.subject,
      message:req.body.message
          })
    return res.status(200).json(postcontact)
  }}
catch(err){
  console.log("error", err)
}
}



//   res.status(200).json(contactUs)
// }

// create a new contactInfo
// const createform = async (req, res) => {
//   console.log("body ", req.body);
//   const { name, email, subject, message } = req.body;

//   // add to the database
//   try {
//     const new_contactUs = await contactUs.create({name, email, subject, message})
//     res.status(200).json(new_contactUs);
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

////////////////////////////////////////////////////////////////
// delete a contact
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
