import { Schema,model } from "mongoose";
const RegSchema=new Schema({
    F_Name:{
        type:String,
        require:true
    },
    L_Name:{
        type:String,
        require:true
    },
    Lost_Name:{
        type:String,
        require:true
    },
    Telephone:{
        type:Number,
        require:true
    },
    Lost_ID:{
        type:String,
        require:false
    },
    File:{
        data:Buffer,
        contentType:String,
       
    },
     Province:{
        type:String,
        require:true
    },
    Distrist:{
        type:String,
        require:true
    },
    Sector:{
        type:String,
        require:true
    },
    Cell:{
        type:String,
        require:true
    },
    Village:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:false
    },

    
        




})
const Lost =model("lostmodal",RegSchema)

export default Lost