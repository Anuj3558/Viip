import mongoose from "mongoose";

const professionalTaxSchema = new mongoose.Schema({
  businessName: {
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
  state: {
    type: String,
    required: true,
  },
  employeeCount: {
    type: Number,
    required: true,
    min: 1,
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

export default mongoose.model("ProfessionalTax", professionalTaxSchema);
