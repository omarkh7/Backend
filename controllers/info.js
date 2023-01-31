const Info = require("../models/info.js");
const getAll = async (req, res) => {
  try {
    const infos = await Info.find({}).sort({ createdAt: -1 });
    res.status(200).json(infos);
  } catch (err) {
    res.json({ message: err });
  }
};

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

const post = async (req, res, next) => {
  let body = req.body;
  let doc = new Info(body);
  doc.save((err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
  });
};
 //update an info by _id
const updateInfo = async (req,res)=>{
const info = await Info.findById(req.params.id);
if(!info){
    res.status(400);
    throw new Error("Info not Found")
}
const updtaedInfo = await Info.findByIdAndUpdate(req.params.id, req.body,{
    new:true,
});
res.status(200).json({updtaedInfo});
};


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
};
