import express from "express";
import BusinessModel from "../models/bussinessModel.js"; // Import the Mongoose model
import { HandleCompanyRegistration } from "../controller/bussinessController.js";
import { HandleInternationalBusinessSetup } from "../controller/InternationalBusinessSetupController.js";
import InternationalBusinessSetup from "../models/InsternantionBussinessSetupSchmea.js";

const BussinessSetupRouter = express.Router();

// Define your routes here
BussinessSetupRouter.post("/company-registrion", HandleCompanyRegistration);
BussinessSetupRouter.post("/llp-annual-filing", HandleCompanyRegistration);
BussinessSetupRouter.post("/msme-registration", HandleCompanyRegistration);
BussinessSetupRouter.post("/apeda-rcmc", HandleCompanyRegistration);
BussinessSetupRouter.post("/spice-board-registration", HandleCompanyRegistration);
BussinessSetupRouter.post("/fieo-registration",HandleCompanyRegistration);
BussinessSetupRouter.post("/hallmark-registration",HandleCompanyRegistration);
BussinessSetupRouter.post("/bis-certification",HandleCompanyRegistration);
BussinessSetupRouter.post("/clra-registration",HandleCompanyRegistration);
BussinessSetupRouter.post("/ad-code-registration",HandleCompanyRegistration);
BussinessSetupRouter.post("/irdai-registration",HandleCompanyRegistration);
BussinessSetupRouter.post("/drugs-and-cosmetics-license",HandleCompanyRegistration);
BussinessSetupRouter.post("/customer-clearance",HandleCompanyRegistration);
BussinessSetupRouter.post("/udyog-aadhar-registration",HandleCompanyRegistration);
BussinessSetupRouter.post("/website-ecommerce-development",HandleCompanyRegistration);
BussinessSetupRouter.post("/nidhi-company-registration",HandleCompanyRegistration);
BussinessSetupRouter.post("/opc-registration", HandleCompanyRegistration);
BussinessSetupRouter.post("/mou-drafting", HandleCompanyRegistration);
BussinessSetupRouter.post("/company-name-change", HandleCompanyRegistration);
BussinessSetupRouter.post("/iec-import-export-code", HandleCompanyRegistration);
BussinessSetupRouter.post("/llp-annual-compliance", HandleCompanyRegistration);

BussinessSetupRouter.post(
  "/partnership-deed-drafting",
  HandleCompanyRegistration
);
BussinessSetupRouter.post(
  "/authorized-share-capital",
  HandleCompanyRegistration
);
BussinessSetupRouter.post(
  "/llp-designated-partner-change",
  HandleCompanyRegistration
);
BussinessSetupRouter.post(
  "/producer-company-registration",
  HandleCompanyRegistration
);
BussinessSetupRouter.post(
  "/startup-india-registration",
  HandleCompanyRegistration
);

BussinessSetupRouter.post(
  "/international-business-setup",
  HandleInternationalBusinessSetup
);
BussinessSetupRouter.post("/digital-signature-certificate", HandleCompanyRegistration);

BussinessSetupRouter.get("/inquiries/type/:type", async (req, res) => {
  try {
    const type = req.params.type;
    const inquiries = await BusinessModel.find({ type: type });
    res.json({ data: inquiries });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
BussinessSetupRouter.get("/international-business-setup", async (req, res) => {
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
