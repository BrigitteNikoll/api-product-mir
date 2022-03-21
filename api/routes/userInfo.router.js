import express from "express";

import { userInfoCtrl } from "../controllers/index.js";
const {
  getAllUserInfo,
  getOneUserInfo,
  createUserInfo,
  updateUserInfo,
  deleteUserInfo
} = userInfoCtrl;

const router = express.Router();

const userRoutes = {
  GET_ALL: "/userInfo/",
  GET_ONE: "/userInfo/:id",
  CREATE: "/userInfo/create",
  UPDATE: "/userInfo/update/:id",
  DELETE: "/userInfo/delete/:id",
};

router.get(userRoutes.GET_ALL, getAllUserInfo);
router.get(userRoutes.GET_ONE, getOneUserInfo);
router.post(userRoutes.CREATE, createUserInfo);
router.put(userRoutes.UPDATE, updateUserInfo);
router.delete(userRoutes.DELETE, deleteUserInfo);

export default router;
