import Message from "./router/messagerouter.js"
import FoundRouter from "./router/FoundRouter.js"
import LostRouter from "./router/lostRouter.js"
import photoRouter from "./router/photoRoutes.js"
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";


dotenv.config();
const connectMongo = () => {
  mongoose          
    .connect(process.env.MONGODB_LINK)
    .then(() => {
      console.log("Database Connected successfully");
    })
    .catch((error) => {
      console.log("Failed to connect to database ", error);
    });
};

const app = express();
app.use(express.json());
app.use(cors());



// app.use("/api/v2", user);


app.use("/api/v2/message", Message);
app.use("/api/v2/", FoundRouter);
app.use("/api/v2/", LostRouter);
app.use("/api/v2/", photoRouter);
const port = 5000;



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectMongo();

}); 