import mongoose from "mongoose";

// Schema products
const schemaUsersInfo = {
  name: String,
  document: String,
  adress: String,
  phone: Number,
  role: String,
};

// Product model
const UserInfo = mongoose.model("UserInfo", schemaUsersInfo, "users");

export default UserInfo;
