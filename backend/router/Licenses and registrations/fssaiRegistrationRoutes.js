import express from "express";
import {
  createFSSAIRegistration,
  getFSSAIRegistrations,
} from "../../controller/Licenses and registrations/fssaiRegistrationController.js";

const router = express.Router();

router.post("/fssai-registration", createFSSAIRegistration);
router.get("/fssai-registration", getFSSAIRegistrations);

export default router;
