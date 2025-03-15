import express from 'express';
import BusinessModel from '../models/bussinessModel.js'; // Import the Mongoose model
import { HandleCompanyRegistration } from '../controller/bussinessController.js';

const BussinessSetupRouter = express.Router();

// Define your routes here
BussinessSetupRouter.post('/company-registrion', HandleCompanyRegistration)
BussinessSetupRouter.post('/llp-annual-filing', HandleCompanyRegistration)
BussinessSetupRouter.post('/sole-proprietorship-registration', HandleCompanyRegistration)
BussinessSetupRouter.post('/nidhi-company-registration', HandleCompanyRegistration)
BussinessSetupRouter.post('/partnership-deed-drafting', HandleCompanyRegistration)
BussinessSetupRouter.post('/authorized-share-capital', HandleCompanyRegistration)
BussinessSetupRouter.post('/llp-annual-compliance', HandleCompanyRegistration)
BussinessSetupRouter.post('/llp-designated-partner-change', HandleCompanyRegistration)
BussinessSetupRouter.post('/producer-company-registration', HandleCompanyRegistration)
BussinessSetupRouter.post('/startup-india-registration', HandleCompanyRegistration)
BussinessSetupRouter.post('/opc-registration', HandleCompanyRegistration)
BussinessSetupRouter.post('/mou-drafting', HandleCompanyRegistration)

// Export the router
export default BussinessSetupRouter;
