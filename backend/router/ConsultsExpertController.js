import express from 'express';
import { HandleConsultsExpert } from '../controller/ConsultsExpertController.js';
import ConsultsExpert from '../models/ConsultsExpertSchmea.js';


const ConsultsExpertRouter = express.Router();

// Define your routes here
ConsultsExpertRouter.post('/consult-and-expert', HandleConsultsExpert)
ConsultsExpertRouter.get('/consult-and-expert', async (req, res) => {
    try {
      const type = req.params.type;
      const inquiries = await ConsultsExpert.find({});
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })


// Export the router
export default ConsultsExpertRouter;
