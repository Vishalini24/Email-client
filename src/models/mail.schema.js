import mongoose from "mongoose";

const mailSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    createdAt:{
        type: String,
        required: true
    },
    isFavourite:{
        type: Boolean,
        default:false
    },
    isRead:{
        type:Boolean,
        default:false
    }
});


const mailModel = mongoose.model('Mail',mailSchema);

export default mailModel;