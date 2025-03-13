import express from "express";
import {
  createNGORegistration,
  getNGORegistrations,
} from "../../controller/Licenses and registrations/ngoRegistrationController.js";

const router = express.Router();

router.post("/ngo-registration", createNGORegistration);
router.get("/ngo-registration", getNGORegistrations);

export default router;
