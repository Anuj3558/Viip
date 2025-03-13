import express from "express";
import {
  createPFRegistration,
  getPFRegistrations,
} from "../../controller/Licenses and registrations/pfRegistrationController.js";

const router = express.Router();

router.post("/pf-registration", createPFRegistration);
router.get("/pf-registration", getPFRegistrations);

export default router;
