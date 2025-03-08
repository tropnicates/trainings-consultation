import mongoose from "mongoose";

const consultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number },
  timeSlot: { 
    type: String, 
    enum: ["10:00 am", "1:00 pm", "3:00 pm"], 
    default: "10:00 am"
  },
  expert: { type: String, required: true },
  consultationType: { type: String, required: true },
});

export default mongoose.model("Consult", consultSchema);
