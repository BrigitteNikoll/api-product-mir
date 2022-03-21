import mongoose from "mongoose";

// Schema products
const schemaUsers = {
  name: String,
  document: String,
  adress: String,
  phone: Number,
  role: String,
};

// Product model
const User = mongoose.model("User", schemaUsers, "users");

export default User;
