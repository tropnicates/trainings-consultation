import Appointment from "../models/appointment.js";

export const sendAppointment = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }

    const newAppointment = new Appointment({ name, email, phone, message });
    await newAppointment.save();

    res.status(201).json({ success: true, message: "Appointment submitted successfully!" });
  } catch (error) {
    console.error("Error in sendAppointment:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    res.status(200).json({ success: true, appointments });
  } catch (error) {
    console.error("Error in getAllAppointments:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
