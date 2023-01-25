const express = require('express')
const {
  getallcontactinfo, 
  postcontact, 
  deletecontactdetail

} = require("../controllers/contactUs.js")

const router = express.Router()

router.get('/getcontact', getallcontactinfo)

router.post('/addcontact', postcontact)

router.delete('/deletecontact/:id', deletecontactdetail)


module.exports = router