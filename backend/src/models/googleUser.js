import mongoose from "mongoose";

const googleUserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model("GoogleUser", googleUserSchema);
