// routes/accountsMaintenanceRoutes.js
import express from 'express';
import AccountsMaintenance from '../models/AccountsMaintenanceModel.js';

const AccountsMaintenanceRouter = express.Router();

/**
 * @route   POST /api/financial-services/accounts-maintenance
 * @desc    Submit a new accounts maintenance inquiry
 * @access  Public
 */
AccountsMaintenanceRouter.post('/financial-services/accounts-maintenance', async (req, res) => {
  try {
    const { name, email, phone, serviceType, message, type } = req.body;

    const newInquiry = new AccountsMaintenance({
      name,
      email,
      phone,
      serviceType,
      message,
      type
    });

    const savedInquiry = await newInquiry.save();

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: savedInquiry
    });
  } catch (error) {
    console.error('Error submitting accounts maintenance inquiry:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while submitting inquiry'
    });
  }
});

/**
 * @route   GET /api/financial-services/accounts-maintenance
 * @desc    Get all accounts maintenance inquiries
 * @access  Private/Admin
 */
AccountsMaintenanceRouter.get('/accounts-maintenance', async (req, res) => {
  try {
   

    const inquiries = await AccountsMaintenance.find();

    const total = await AccountsMaintenance.countDocuments();

    res.status(200).json({
      success: true,
      count: inquiries.length,
      total,
      data: inquiries
    });
  } catch (error) {
    console.error('Error fetching accounts maintenance inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching data'
    });
  }
});

export default AccountsMaintenanceRouter;
