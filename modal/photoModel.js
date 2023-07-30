import mongoose from "mongoose";

const photoSchema =new mongoose.Schema({
    name:{
        type:String,
       
    },
   image:{
        data:Buffer,
        contentType: String
    }
})

export default mongoose.model('photo',photoSchema)