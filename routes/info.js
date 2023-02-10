const express = require('express')
const infoController =require ('../controllers/info.js');
const router = express.Router();
const multer = require('multer');

router.get('/', infoController.getAll);
router.get('/:id', infoController.getOne);
router.post('/', infoController.upload.single("image"),infoController.post);
router.put('/:id',infoController.upload.single("image"), infoController.updateInfo);
router.delete('/:id', infoController.deleteInfo);

module.exports = router
