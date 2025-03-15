import express from 'express';
import { HandleInternationalBusinessSetup } from '../controller/InternationalBusinessSetupController.js';


const InternationalBusinessSetupRouter = express.Router();

// Define your routes here
InternationalBusinessSetupRouter.post('/consult-and-expert', HandleInternationalBusinessSetup)


// Export the router
export default InternationalBusinessSetupRouter;
