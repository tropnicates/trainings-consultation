import express from "express";
import { sendCheckout, getAllChechouts } from "../controllers/chechoutController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js"; 

const router = express.Router();

router.post("/", isAuthenticated, sendCheckout);
router.get("/", isAuthenticated, getAllChechouts);

export default router;
