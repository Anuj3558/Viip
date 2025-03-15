import express from 'express';
import BusinessModel from '../models/bussinessModel.js'; // Import the Mongoose model
import { HandleCompanyRegistration } from '../controller/bussinessController.js';
import { HandleInternationalBusinessSetup } from '../controller/InternationalBusinessSetupController.js';
import InternationalBusinessSetup from '../models/InsternantionBussinessSetupSchmea.js';

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
BussinessSetupRouter.post('/company-name-change', HandleCompanyRegistration)
BussinessSetupRouter.post('/international-business-setup', HandleInternationalBusinessSetup)

BussinessSetupRouter.get('/inquiries/type/:type', async (req, res) => {
    try {
      const type = req.params.type;
      const inquiries = await BusinessModel.find({ type: type });
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  BussinessSetupRouter.get('/international-business-setup', async (req, res) => {
    try {
      const type = req.params.type;
      const inquiries = await InternationalBusinessSetup.find({});
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Export the router
export default BussinessSetupRouter;
