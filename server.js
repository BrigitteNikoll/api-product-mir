import express from "express";
import mongoose from "mongoose";

import { productCtrl } from "./api/controllers/index.js";
import { productRouter, userRouter } from "./api/routes/index.js";
const { getAllProducts, getOneProduct, createProduct } = productCtrl;


/* MONGOSSE */

//Connect to db
await mongoose.connect(
  "mongodb+srv://brigitte:root@clase-02-02.u6sw6.mongodb.net/product_db"
);

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
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;
/* app.get("/api/products", getAllProducts);
app.get("/api/products/:id", getOneProduct);
app.post("/api/products/create", createProduct); */

// Launch server in port 5000
app.listen(PORT, () => {
  console.log("Iniatialized server!");
});
