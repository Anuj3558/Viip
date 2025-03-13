import express from 'express';
import BusinessModel from '../models/bussinessModel.js'; // Import the Mongoose model

const BussinessSetupRouter = express.Router();

// Define your routes here
BussinessSetupRouter.post('/company-registrion', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, phone, message, type } = req.body;

    // Create a new document using the BusinessModel
    const newBusiness = new BusinessModel({
      name,
      email,
      phone,
      message,
      type
    });

    // Save the new business data to the database
    const savedBusiness = await newBusiness.save();

    // Respond with a success message and the saved data
    res.status(201).json({ message: 'Business registration inquiry created successfully', data: savedBusiness });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error creating business registration inquiry:', error);
    res.status(500).json({ message: 'Failed to create business registration inquiry', error: error.message });
  }
});

// Export the router
export default BussinessSetupRouter;
