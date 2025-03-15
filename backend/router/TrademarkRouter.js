import express from 'express';
import { HandleTrademarkAssignement, HandleTrademarkRegistration } from '../controller/TrademarkController.js';
import TrademarkModel from '../models/TrademarkSchema.js';
import TrademarkAssignment from '../models/TrademarkTrademarkAssignmentSchmea.js';

const TrademarkRouter = express.Router();

// Define your routes here
TrademarkRouter.post('/trademark-registration', HandleTrademarkRegistration)
TrademarkRouter.post('/trademark-registration-individual', HandleTrademarkRegistration)
TrademarkRouter.post('/trademark-assignment', HandleTrademarkAssignement)

TrademarkRouter.get('/trademark-registration/:type', async (req, res) => {
    try {
      const type = req.params.type;
      const inquiries = await TrademarkModel.find({type: type})
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
})

TrademarkRouter.get('/trademark-assignment', async (req, res) => {
    try {
      const inquiries = await TrademarkAssignment.find({});
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
})

// Export the router
export default TrademarkRouter;
