import mongoose from "mongoose";

const ngoRegistrationSchema = new mongoose.Schema({
  ngoName: {
    type: String,
    required: true,
  },
  trusteeName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9\s+-]+$/,
  },
  ngoType: {
    type: String,
    required: true,
    enum: ["Society", "Trust", "Section 8 Company"],
  },
  message: {
    type: String,
    maxLength: 500,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("NGORegistration", ngoRegistrationSchema);
