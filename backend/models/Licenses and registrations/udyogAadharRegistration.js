import mongoose from "mongoose";

const udyogAadharRegistrationSchema = new mongoose.Schema({
  ownerName: {
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
  businessName: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
    match: /^\d{12}$/,
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

export default mongoose.model(
  "UdyogAadharRegistration",
  udyogAadharRegistrationSchema
);
