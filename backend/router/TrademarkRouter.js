import express from 'express';
import { HandleTrademarkAssignement, HandleTrademarkRegistration } from '../controller/TrademarkController.js';

const TrademarkRouter = express.Router();

// Define your routes here
TrademarkRouter.post('/trademark-registration', HandleTrademarkRegistration)
TrademarkRouter.post('/trademark-registration-individual', HandleTrademarkRegistration)
TrademarkRouter.post('/trademark-assignment', HandleTrademarkAssignement)

// Export the router
export default TrademarkRouter;
