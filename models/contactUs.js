const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactForm = new Schema({
    name:{
        type: 'string',
        required: false
    },

    email: {
        type:'string',
        required: false
    },

    subject:{
        type: 'string',
        required: false
    },

    message:{
        type: 'string',
        required: false
    }
},{timestamps:true});

module.exports = mongoose.model('ContactUs',contactForm)