import mongoose from "mongoose";
import dotenv   from 'dotenv';

dotenv.config()
mongoose.set("strictQuery", true);

const connection = async () =>{
    try {
               await mongoose.connect(process.env.DB);
                 console.log("connected to database");
        } catch (error) {
                 console.log(error);
                console.log("could not connect to database");
       }
}

export default connection;
