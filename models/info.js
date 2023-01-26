import mongoose from "mongoose";

const {Schema , model} = mongoose;

const infoSchema = new Schema({
    info_title :{
        type:String,
        requierd:true
    },
    info_descreption:{
        type: String,
        requierd:true
    },
    info_image:{
        type: String,
        requierd:true
    },
    info_date:{
        type: Date,
        requierd:true
    },
    info_catagory:{
        type: String,
        requierd:true
    }

    },
    {
        timestamps: true,
        collection: 'Infos'
});

const Info = model ('Info', infoSchema);


export default Info;