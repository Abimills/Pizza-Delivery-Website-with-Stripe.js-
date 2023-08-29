import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import pizzaRouter from "./routes/pizza.js";
import cors from "cors";

dotenv.config();
const app = express();

// middleware
app.use(express.json());

// check for cors
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
 
app.use("/api", pizzaRouter);

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "I hope it work" });
// });

// app.use("/api/pizza",pizzaRouter);
// database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
};

//the environment port
const port = process.env.PORT || 5000;

try {
  app.listen(port, () => {
    connect();
    console.log(`Server is running on ${port}`);
  });
} catch (error) {
  console.log(error);
}
