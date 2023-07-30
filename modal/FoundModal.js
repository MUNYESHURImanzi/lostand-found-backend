import { Schema,model } from "mongoose";
const FoundSchema=new Schema({
    F_Name:{
        type:String,
        require:true
    },
    L_Name:{
        type:String,
        require:true
    },
    Found_Name:{
        type:String,
        require:true
    },
    Telephone:{
        type:Number,
        require:true
    },
    Found_ID:{
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
const Found =model("Foundmodal",FoundSchema)

export default Found