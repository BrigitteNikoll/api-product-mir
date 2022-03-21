import express from "express";

import { productCtrl } from "../controllers/index.js";
import {validateToken} from "../middleware/index.js"

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  findProduct
} = productCtrl;

const router = express.Router();

const productRoutes = {
  GET_ALL: "/products/",
  GET_ONE: "/products/:id",
  CREATE: "/products/create",
  UPDATE: "/products/update/:id",
  DELETE: "/products/delete/:id",
};

router.get(productRoutes.GET_ALL, validateToken, getAllProducts);
router.get(productRoutes.GET_ONE, getOneProduct);
router.post(productRoutes.CREATE, createProduct);
router.put(productRoutes.UPDATE, findProduct, updateProduct);
router.delete(productRoutes.DELETE, deleteProduct);

export default router;