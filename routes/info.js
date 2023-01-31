const express = require('express')
const infoController =require ('../controllers/info.js');
const router = express.Router();

router.get('/', infoController.getAll);
router.get('/:id', infoController.getOne);
router.post('/', infoController.post);
router.put('/:id', infoController.updateInfo);
router.delete('/:id', infoController.deleteInfo);

module.exports = router