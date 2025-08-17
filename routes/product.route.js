import express from "express";
import { addProduct } from "../controllers/product.controller.js";
import { addOrderItems, topSelling } from "../controllers/orderItems.controller.js";

const route = express.Router();

route.post('/addProduct', addProduct)
route.post('/addOrderItems', addOrderItems)
route.get('/topSelling', topSelling)
export default route;