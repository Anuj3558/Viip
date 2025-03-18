import mongoose from "mongoose";

const ipServiceSchema = new mongoose.Schema({
  name: {
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
    match: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  },
  message: {
    type: String,
    required: true,
    maxLength: 1000,
  },
  type: {
    type: String,
    required: true,
    enum: [
      "International IP Protection",
      "IP Due Diligence",
      "IP Litigation Support",
      "IP Strategy Consulting",
      "Copyright Registration",
      "Industrial Design Registration",
      "IP Licensing",
      "IP Portfolio Management",
      "IP Valuation",
      "Patent Registration",
    ],
  },
 
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("IPService", ipServiceSchema);
