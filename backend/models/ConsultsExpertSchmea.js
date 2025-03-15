import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema
const ConsultsExpertSchema = new Schema({
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
  consultationType: {
    type: String,
    required: true, // Consultation type is required
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

// Create the model
const ConsultsExpert = mongoose.model('ConsultsExpert', ConsultsExpertSchema);

export default ConsultsExpert;