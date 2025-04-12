// models/TaxInquiry.js
import mongoose from 'mongoose';

const taxInquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  serviceType: {
    type: String,
    required: true,
    enum: [
      'ITR-1 (Sahaj)',
      'ITR-2',
      'ITR-3',
      'ITR-4 (Sugam)',
      'ITR for LLP',
      'ITR for Pvt Ltd & Public Ltd Co.',
      'Income Tax Registration'
    ]
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'in-progress', 'completed'],
    default: 'pending'
  }
});

const TaxInquiry = mongoose.model('TaxInquiry', taxInquirySchema);
export default TaxInquiry;