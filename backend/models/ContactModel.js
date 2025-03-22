import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the schema
const ContactSchema = new Schema(
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
    subject: {
      type: String,
      required: true, // Subject is required
    },
    message: {
      type: String,
      required: true, // Message is required
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create the model
const ContactModel = mongoose.model("Contact", ContactSchema);

export default ContactModel;
