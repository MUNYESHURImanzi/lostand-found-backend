import { Lostcreate,readAllLost } from "../controller/LostController.js";
import { Router } from "express";

const App =Router()
App.post("/lost",Lostcreate)
App.get("/alllost",readAllLost)
export default App
