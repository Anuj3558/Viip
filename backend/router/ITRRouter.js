import express from 'express';
import { HandleITRRegistration } from '../controller/ITRController.js';
import { PayrollManagementInquriy } from '../controller/PayrollController.js';

const ITRRouter = express.Router();

// Define your routes here
ITRRouter.post('/itr-filing', HandleITRRegistration)
ITRRouter.post('/payroll-management', PayrollManagementInquriy)


// Export the router
export default ITRRouter;
