import mongoose from "mongoose";

const digitalSignatureCertificateSchema = new mongoose.Schema({
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
    match: /^[0-9\s+-]+$/,
  },
  certificateType: {
    type: String,
    required: true,
    enum: ["Class 2", "Class 3", "DGFT"],
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
  "DigitalSignatureCertificate",
  digitalSignatureCertificateSchema
);
