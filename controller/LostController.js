import Lost from "../modal/LostModal.js";

async function Lostcreate(req,res){
    try{
       const{F_Name,L_Name,Telephone,Lost_Name,Lost_ID,File,Province,Distrist,sector,cellmessage}=req.body;
       const NewLost =Lost({F_Name,L_Name,Telephone,Lost_Name,Lost_ID,File,Province,Distrist,sector,cellmessage})
       await Lost.save()
       res
       .status(200)
       .json({
        message:"you have saved your data ",
        data:NewLost
       })
    }catch(error){
        console.error("Error saving message:", error);
        res.status(500).json({ error: "Failed to save message" });
    }
}

//geting Lost 

const readAllLost = async (req, res) => {
    try {
      const response = await Lost.find({});
  
      if (response.length == 0) {
        res.status(404).json({
          message: "No data Lost",
          data: response,
          error: "No data Lost",
        });
      } else {
        res.status(200).json({
          message: "Retrieved successfully",
          data: response,
          error: null,
        });
      }
    } catch (error) {
      console.log("Error occurred in readAllLost: ", error);
      res.status(500).json({
        message: "Error occurred",
        error: error,
        data: null,
      });
    }}

    export {Lostcreate,readAllLost};