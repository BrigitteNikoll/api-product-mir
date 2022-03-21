import express from "express";

import { userCtrl } from "../controllers/index.js";
const {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
} = userCtrl;

const router = express.Router();

const userRoutes = {
  GET_ALL: "/user/",
  GET_ONE: "/user/:id",
  CREATE: "/user/create",
  UPDATE: "/user/update/:id",
  DELETE: "/user/delete/:id",
};

router.get(userRoutes.GET_ALL, getAllUser);
router.get(userRoutes.GET_ONE, getOneUser);
router.post(userRoutes.CREATE, createUser);
router.put(userRoutes.UPDATE, updateUser);
router.delete(userRoutes.DELETE, deleteUser);

export default router;
