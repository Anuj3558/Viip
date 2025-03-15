import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema
const InternationalBusinessSetupSchema = new Schema({
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
 // Validates phone number format
  },
  message: {
    type: String,
    required: false, // Message is optional

  },
  country: {
    type: String,
    required: true, // Consultation type is required
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

// Create the model
const InternationalBusinessSetup = mongoose.model('InternationalBusinessSetup', InternationalBusinessSetupSchema);

export default InternationalBusinessSetup;