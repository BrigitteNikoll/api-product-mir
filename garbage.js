import express from "express";
import mongoose from "mongoose";

/* MONGOSSE */

const { Schema } =  mongoose;

/* const connectDB = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://brigitte:root@clase-02-02.u6sw6.mongodb.net/test"
    );

    //Schema para productos
    const schemaProducts = new Schema ({
        ref: String,
        name: String,
        description: String,
    });

    //Esto ya sería un modelo que va a resolver el schema
    const Product = mongoose.model("Product", schemaProducts, "product");
    const products = await Product.find()
    console.log("Product", products)
};

connectDB(); */


//Schema products
const schemaProducts = new Schema ({
  ref: String,
  name: String,
  description: String,
});

//Product model
const Product = mongoose.model("Product", schemaProducts, "product");

//Connect to db
await mongoose.connect(
  "mongodb+srv://brigitte:root@clase-02-02.u6sw6.mongodb.net/test"
);
  
//Listener to connection error


//Controller get all product
const getAllProducts = async (request, response) => {
  const products = await Product.find();
  response.json(products)
}



/* EXPRESS */
const app = express();

// Routes
app.get("/", (request, response) => {
  response.send("Hola!");
});
app.get("/products", (request, response) => {
  /*     console.log("request", request) */
  console.log("request", request.query);
  response.send("<h1>Products!<h1>");
});

// Launch server in port 5000
app.listen(5000, () => {
  console.log("Iniatialized server!");
});
