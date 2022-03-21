import express from "express";
import mongoose from "mongoose";
import "dotenv/config";


import { productCtrl } from "./api/controllers/index.js";
import { productRouter, userInfoRouter, userRouter } from "./api/routes/index.js";
const { getAllProducts, getOneProduct, createProduct } = productCtrl;

/* MONGOSSE */

//Connect to db
const dbConnection = process.env.DB_STRING_CONNECTION;
await mongoose.connect(dbConnection);

//Listener to connection error
mongoose.connection.on("error", function (e) {
  console.log("ERROR: ", e);
});

/* EXPRESS */
const app = express();

//Creación de Middleware
app.use(express.json());

// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});

app.use("/api", productRouter);
app.use("/api", userInfoRouter);
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

// Launch server in port 5000
app.listen(PORT, () => {
  console.log("Iniatialized server!");
});
