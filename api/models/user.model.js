import mongoose from "mongoose";

// Schema products
const schemaUsers = {
  name: String,
  document: String,
  adress: String,
  phone: Number,
  created_at: { type: Date, default: Date.now() },
  role: String,
  email: String,
  password: String
};

// Product model
const User = mongoose.model("User", schemaUsers, "users");

export default User;
