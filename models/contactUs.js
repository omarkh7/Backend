const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactForm = new Schema({
 
    
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },  

    company: {
      type: 'string',
      required: true

    },

    email: {
        type:'string',
        required: true
    },

    subject:{
        type: 'string',
        required: true
    },

    message:{
        type: 'string',
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('ContactUs',contactForm)