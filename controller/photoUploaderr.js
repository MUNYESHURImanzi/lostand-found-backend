import multer from 'multer'
import photoModel from '../modal/photoModel.js';
const uploadPhoto = async (req, res) =>{

    const Storage=multer.diskStorage({
        destination:'uploads',
        filename:(req,file,cb)=>{
            cb(null,file.originalname)
        }
    })

    const upload=multer({
        storage:Storage
    }).single('image')
    upload(req,res,
        (err)=>{
if(err){
console.log(err)
}
else{
    const newImage=new photoModel({
        name:req.body.name,
        image:{
        data:req.file.filename,
        contentType:'image/png'
        }
    })
    newImage.save()
    .then(()=>res.send("successfuly uploaded"))
    .catch(err=>{
        console.log(err)
    })
}
    })
   
};
const getAllImages = async (req, res) => {
    try {
      const images = await photoModel.find({});
      res.status(200).json(images);
    } catch (error) {
      console.log("Error occurred while fetching images: ", error);
      res.status(500).json({ error: "Failed to fetch images" });
    }
  };

export  {uploadPhoto,getAllImages}