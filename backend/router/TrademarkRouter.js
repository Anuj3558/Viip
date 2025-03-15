import express from 'express';
import BusinessModel from '../models/bussinessModel.js'; // Import the Mongoose model
import { HandleCompanyRegistration } from '../controller/bussinessController.js';

const TrademarkRouter = express.Router();

// Define your routes here
TrademarkRouter.post('/trademark-registration', HandleCompanyRegistration)
TrademarkRouter.post('/trademark-registration-individual', HandleCompanyRegistration)

// Export the router
export default TrademarkRouter;
