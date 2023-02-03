const mongoose = require('mongoose')
const Schema = mongoose.Schema
const infoSchema = new Schema({
    info_title: {
        type: String,
        requierd: true
    },
    info_description: {
        type: String,
        requierd: true
    },
    info_image: {
        type: String,
        
    },
    info_date: {
        type: Date,
        requierd: true
    },
    info_category: [{
        type: String,
        enum: ['Brief Info, Work Experience', 'Achievements', 'Certifications', 'Talks & Workshops', 'Endorsements & Compliments', 'News & Articles', 'My Articles', 'Writeups', 'Social Media Accounts'],
        required: true
    }]

},
    {
        timestamps: true,
        collection: 'Infos'
    });

module.exports = mongoose.model('Info', infoSchema)
