import express from 'express';
import session from "express-session";
import dotenv from 'dotenv';
import morgan from 'morgan';
import passport from 'passport';
import "./config/passport.js"
import cookieParser from "cookie-parser";
import { connectDB } from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import consultationRoutes from "./routes/consultRoutes.js";
import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import "./config/auth.js";
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());  
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use("/api/consultations", consultationRoutes);
app.use('/api/payment', paymentRoutes); 

app.get('/', (req, res) => {
    res.send({ message: 'API is running...' });
  });
  
  app.use(notFound);
  app.use(errorHandler);
  
  export default app;
