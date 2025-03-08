import express from "express";
import { sendConsultation, getAllConsultations } from "../controllers/consultController.js";

import { isAuthenticated } from "../middlewares/authMiddleware.js"; 

const router = express.Router();

router.post("/", isAuthenticated, sendConsultation);
router.get("/", isAuthenticated, getAllConsultations);

export default router;
