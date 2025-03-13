import express from "express";
import {
  createLegalMetrologyRegistration,
  getLegalMetrologyRegistrations,
} from "../../controller/Licenses and registrations/legalMetrologyRegistrationController.js";

const router = express.Router();

router.post("/legal-metrology-registration", createLegalMetrologyRegistration);
router.get("/legal-metrology-registration", getLegalMetrologyRegistrations);

export default router;
