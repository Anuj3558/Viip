import mongoose from "mongoose";

const esiRegistrationSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
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
  employeeCount: {
    type: Number,
    required: true,
    min: 1,
  },
  establishmentDate: {
    type: Date,
    required: true,
  },
  state: {
    type: String,
    required: true,
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

export default mongoose.model("ESIRegistration", esiRegistrationSchema);
