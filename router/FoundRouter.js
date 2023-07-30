import { Foundcreate,readAllFound } from "../controller/foundController.js";
import { Router } from "express";

const App =Router()
App.post("/found",Foundcreate)
App.get("/allfound",readAllFound)
export default App


