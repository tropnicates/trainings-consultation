import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }, 
    amount: { type: Number, required: true }, 
    paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
    paymentId: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("Checkout", checkoutSchema);
