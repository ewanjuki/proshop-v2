import express from "express";

import {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
} from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getOrders).post(protect, createOrder);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, admin, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
