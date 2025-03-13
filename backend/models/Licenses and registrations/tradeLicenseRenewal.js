import mongoose from "mongoose";

const tradeLicenseRenewalSchema = new mongoose.Schema({
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
  licenseNumber: {
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

export default mongoose.model("TradeLicenseRenewal", tradeLicenseRenewalSchema);
