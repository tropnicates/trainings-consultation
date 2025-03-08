import express from "express";
import { sendAppointment, getAllAppointments } from "../controllers/appointmentController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js"; 

const router = express.Router();

router.post("/", sendAppointment); 
router.get("/", isAuthenticated, getAllAppointments); 

export default router;
