
import Found from "../modal/FoundModal.js";
import multer from "multer";

// Set up Multer storage outside the function
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("File");

async function Foundcreate(req, res) {
  try {
    // Handle file upload first
    upload(req, res, async (err) => {
      if (err) {
        console.error("Error uploading file:", err);
        return res.status(500).json({ error: "Failed to upload file" });
      }

      const { F_Name, L_Name, Telephone, Found_Name, Found_ID, File, Province, Distrist, Sector, Cell,Message } = req.body;
      const NewFound = new Found({
        F_Name,
        L_Name,
        Telephone,
        Found_Name,
        Found_ID,
        File: req.File, // Save the file path instead of the file itself
        Province,
        Distrist,
        Sector,
        Cell,
        Message,
      });

      // Save the NewFound instance
      await NewFound.save();

      res.status(200).json({
        message: "You have saved your data",
        data: NewFound,
      });
    });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
}

// Getting found items
const readAllFound = async (req, res) => {
  try {
    const response = await Found.find({});

    if (response.length == 0) {
      res.status(404).json({
        message: "No data found",
        data: response,
        error: "No data found",
      });
    } else {
      res.status(200).json({
        message: "Retrieved successfully",
        data: response,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occurred in readAllFound: ", error);
    res.status(500).json({
      message: "Error occurred",
      error: error,
      data: null,
    });
  }
};

export { Foundcreate, readAllFound };
