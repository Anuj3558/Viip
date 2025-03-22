import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema
const PatentSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // Name is required
      trim: true, // Removes extra spaces
    },
    email: {
      type: String,
      required: true, // Email is required
    },
    phone: {
      type: String,
      required: true, // Phone is required
    },
    message: {
      type: String,
      required: false, // Message is optional
    },
    type: {
      type: String,
      required: true, // Type is required
      
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create the model
const PatentModel = mongoose.model("Patent", PatentSchema);

export default PatentModel;
