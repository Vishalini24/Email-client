
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.DB_URL;

// Making Connecting with mongoDB
export const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect(url)
        console.log("Database Connected: ", connect.connection.name)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

