import express from "express";
import { sendContact, getAllContacts } from "../controllers/contactController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js"; 

const router = express.Router();

router.post("/", sendContact); 
router.get("/", isAuthenticated, getAllContacts); 

export default router;
