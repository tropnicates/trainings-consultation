import Checkout from "../models/checkout.js";

export const sendCheckout = async (req, res) => {
  try {
    const checkout = new Checkout(req.body);
    await checkout.save();
    res.status(201).json({ success: true, message: "Checkout created successfully", data: checkout });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllChechouts = async (req, res) => {
  try {
    const checkouts = await Checkout.find();
    res.status(200).json({ success: true, data: checkouts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
