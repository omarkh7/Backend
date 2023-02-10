const mongoose = require('mongoose')
const Schema = mongoose.Schema
const infoSchema = new Schema({
    info_title: {
        type: String,
       
    },
    info_description: {
        type: String,
        
    },
    info_image: {
        type: String,
        
    },
    info_url:{
        type: String,
    },
   
    info_date: {
        type: Date,
    },
    info_category: [{
        type: String,
        enum: ['Bio','Brief Info', 'Work Experience', 'Achievements', 'Certifications', 'Talks & Workshops', 'Endorsements & Compliments', 'News & Articles', 'My Articles', 'Writeups & Projects','Writeups', 'Social Media Accounts', 'Highlights'],
        required: true
    }]
},
    {
        timestamps: true,
        collection: 'Infos'
    });

module.exports = mongoose.model('Info', infoSchema)
