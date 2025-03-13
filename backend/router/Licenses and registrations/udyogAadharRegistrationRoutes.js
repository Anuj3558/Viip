import express from "express";
import {
  createUdyogAadharRegistration,
  getUdyogAadharRegistrations,
} from "../../controller/Licenses and registrations/udyogAadharRegistrationController.js";

const router = express.Router();

router.post("/udyog-aadhar-registration", createUdyogAadharRegistration);
router.get("/udyog-aadhar-registration", getUdyogAadharRegistrations);

export default router;
