import express from "express";
import {
  HandleTrademarkAssignement,
  HandleTrademarkRegistration,
} from "../controller/TrademarkController.js";
import TrademarkModel from "../models/TrademarkSchema.js";
import TrademarkAssignment from "../models/TrademarkTrademarkAssignmentSchmea.js";

const TrademarkRouter = express.Router();

// Define your routes here
TrademarkRouter.post("/trademark-registration", HandleTrademarkRegistration);
TrademarkRouter.post(
  "/trademark-registration-individual",
  HandleTrademarkRegistration
);
TrademarkRouter.post("/trademark-assignment", HandleTrademarkRegistration);
TrademarkRouter.post(
  "/trademark-obkkection-response-inquiry",
  HandleTrademarkRegistration
);
TrademarkRouter.post(
  "/trademark-registration-international",
  HandleTrademarkRegistration
);
TrademarkRouter.post(
  "/trademark-registration-usa",
  HandleTrademarkRegistration
);
TrademarkRouter.post("/trademark-renewal", HandleTrademarkRegistration);
TrademarkRouter.post("/trademark-watch", HandleTrademarkRegistration);
TrademarkRouter.post("/trademark-infringement", HandleTrademarkRegistration);



TrademarkRouter.get("/trademark-registration/:type", async (req, res) => {
  try {
    const type = req.params.type;
    const inquiries = await TrademarkModel.find({ type: type });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

TrademarkRouter.get("/trademark-assignment", async (req, res) => {
  try {
    const inquiries = await TrademarkAssignment.find({});
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export the router
export default TrademarkRouter;
