import Consult from "../models/consult.js";

export const sendConsultation = async (req, res) => {
  try {
    const { name, email, phone, timeSlot, expert, consultationType } = req.body;

    const newConsultation = new Consult({
      name,
      email,
      phone,
      timeSlot,
      expert,
      consultationType,
    });

    await newConsultation.save();
    res.status(201).json({ message: "Consultation request submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consult.find({});
    res.status(200).json({ data: consultations });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
