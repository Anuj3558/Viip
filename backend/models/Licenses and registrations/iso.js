import mongoose from "mongoose";

const isoSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  contactName: {
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
  employees: {
    type: Number,
    required: false,
    min: 1,
  },
  message: {
    type: String,
    required: true,
    maxLength: 500,
  },
  isoType: {
    type: String,
    required: true,
    enum: [
      "9000_2005",
      "9001",
      "13485",
      "14001",
      "22000",
      "27001",
      "26000",
      "31000",
      "general",
    ],
    default: "general",
  },
  standard: {
    type: String,
    required: false,
  },
  products: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: false,
  },
  scope: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("ISO", isoSchema);
