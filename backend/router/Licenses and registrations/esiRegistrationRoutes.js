import express from "express";
import {
  createESIRegistration,
  getESIRegistrations,
} from "../../controller/Licenses and registrations/esiRegistrationController.js";

const router = express.Router();

router.post("/esi-registration", createESIRegistration);
router.get("/esi-registration", getESIRegistrations);

export default router;
