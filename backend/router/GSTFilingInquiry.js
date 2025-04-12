// routes/gstFilingRoutes.js
import express from 'express';
import GSTFilingInquiry from '../models/GSTFilingInquiry.js';

const GSTRouter = express.Router();

// POST - Create new GST Filing inquiry
GSTRouter.post('/gst-filing-compliance', async (req, res) => {
  try {
    const { name, email, phone, serviceType, message, type } = req.body;

    // Basic manual validation
    if (!name || !email || !phone || !serviceType || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const allowedServices = [
      'GSTR-1 (Monthly)',
      'GSTR-3B',
      'GSTR-9 & GSTR-9C',
      'GST Amendment',
      'GST Reconciliation',
      'E-Way Bill Generation',
      'LUT Filing'
    ];

    if (!allowedServices.includes(serviceType)) {
      return res.status(400).json({ success: false, message: 'Invalid service type selected.' });
    }

    const inquiry = new GSTFilingInquiry({
      name,
      email,
      phone,
      serviceType,
      message,
      type: type || 'gst_filing_inquiry'
    });

    const savedInquiry = await inquiry.save();

    res.status(201).json({
      success: true,
      message: 'GST filing inquiry submitted successfully',
      data: savedInquiry
    });
  } catch (error) {
    console.error('Error submitting GST inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// GET - Get all GST Filing inquiries (without pagination)
GSTRouter.get('/gst-filing-compliance', async (req, res) => {
  try {


    const inquiries = await GSTFilingInquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: inquiries
    });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch inquiries.' });
  }
});

export default GSTRouter;
