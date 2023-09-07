import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import pizzaRouter from "./routes/pizza.js";



import cors from "cors";
import paymentRouter from "./routes/payment.js";

// app.use(express.static("public")); //check this for any erro that may cause

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
app.use("/payment", paymentRouter);

// app.get("/", (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + "/index.html");
//   res.sendFile(path);
// });

// database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
};

// stripe integration backend

// app.use(express.static(process.env.STATIC_DIR));

// =================

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
