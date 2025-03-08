import Contact from "../models/contact.js"; 

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, sub, message } = req.body;

    if (!name || !email || !phone || !sub || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }

    const newContact = new Contact({ name, email, phone, sub, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Contact submitted successfully!" });
  } catch (error) {
    console.error("Error in sendContact:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    console.error("Error in getAllContacts:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
