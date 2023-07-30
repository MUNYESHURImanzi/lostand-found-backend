import {uploadPhoto,getAllImages} from "../controller/photoUploaderr.js";
import express from "express"

const router=express.Router()

router.post("/add",uploadPhoto )
router.get("/allphoto",getAllImages)


export default router