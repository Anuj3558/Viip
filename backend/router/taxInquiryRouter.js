import express from 'express';
import TaxInquiry from '../models/taxInquirySchema.js';

const TaxRouter = express.Router();

// POST route to save new tax inquiry
TaxRouter.post('/income-tax-filing', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      serviceType,
      message,
      route,
      type
    } = req.body;

    // Create new tax inquiry
    const newInquiry = new TaxInquiry({
      name,
      email,
      phone,
      serviceType,
      message,
      route,
      type
    });

    // Save to database
    const savedInquiry = await newInquiry.save();
    
    // Return success response
    res.status(201).json({
      success: true,
      data: savedInquiry
    });
    
  } catch (error) {
    console.error('Error saving tax inquiry:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        errors
      });
    }
    
    // Handle other errors
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later.'
    });
  }
});

// GET route to retrieve all tax inquiries
TaxRouter.get('/income-tax-filing', async (req, res) => {
  try {
  
    
    // Find inquiries with filters and pagination
    const inquiries = await TaxInquiry.find()
      
    
    // Get total count for pagination
    
    // Return data with pagination info
    res.status(200).json({
      success: true,
      data: inquiries
    });
    
  } catch (error) {
    console.error('Error retrieving tax inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later.'
    });
  }
});



export default TaxRouter;