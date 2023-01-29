const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactForm = new Schema({
 
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },  

    email: {
        type:string,
        required: false
    },

    subject:{
        type: string,
        required: false
    },

    message:{
        type: string,
        required: false
    }
},{timestamps:true});

module.exports = mongoose.model('ContactUs',contactForm)