// models/AccountsMaintenance.js
import mongoose from 'mongoose';

const accountsMaintenanceSchema = new mongoose.Schema({
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
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: [
      'Sales Invoice Entry',
      'Purchase Invoice Entry',
      'Bank Reconciliation',
      'Journal Entries',
      'Petty Cash Book',
      'Ledger Maintenance',
      'TDS Payable & Receivable',
      'Trial Balance & Finalization',
      'Balance Sheet Preparation',
      'Profit & Loss Account',
      'Cost Sheet Preparation',
      'Inventory Management',
      'Branch Transfer & Inter-Unit Billing',
      'Audit Data Preparation',
      'ROC Filing Support'
    ]
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  type: {
    type: String,
    default: 'accounts_maintenance_inquiry'
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

const AccountsMaintenance = mongoose.model('AccountsMaintenance', accountsMaintenanceSchema);

export default AccountsMaintenance;
