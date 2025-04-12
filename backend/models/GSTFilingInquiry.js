// models/gstFilingInquiry.js
import mongoose from 'mongoose';

const gstFilingInquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please provide a valid phone number']
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: [
      'GSTR-1 (Monthly)', 
      'GSTR-3B', 
      'GSTR-9 & GSTR-9C', 
      'GST Amendment', 
      'GST Reconciliation', 
      'E-Way Bill Generation', 
      'LUT Filing'
    ]
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },

  type: {
    type: String,
    default: 'gst_filing_inquiry'
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
gstFilingInquirySchema.index({ email: 1 });
gstFilingInquirySchema.index({ status: 1 });
gstFilingInquirySchema.index({ createdAt: -1 });

const GSTFilingInquiry = mongoose.model('GSTFilingInquiry', gstFilingInquirySchema);

export default GSTFilingInquiry;