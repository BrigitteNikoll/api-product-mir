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
const UserInfo = mongoose.model("UserInfo", schemaUsers, "users");

export default UserInfo;
