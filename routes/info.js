const express = require('express')
// const infoController =require ('../controllers/info.js');
const router = express.Router();
const multer = require('multer');

const {getAll,post,deleteInfo,upload, updateInfo}=require("../controllers/info.js");

// router.get('/', infoController.getAll);
// router.get('/:id', infoController.getOne);
// router.post('/', infoController.upload.single("info_image"),infoController.post);
// router.put('/:id',infoController.upload.single("info_image"), infoController.updateInfo);
// router.delete('/:id', infoController.deleteInfo);

router.get("/",getAll)
router.post("/",upload.single("info_image"),post)
router.delete("/:id",deleteInfo)
router.put("/:id",upload.single("info_image"),updateInfo)

module.exports = router
