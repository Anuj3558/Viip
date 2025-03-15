import express from "express";
import {
  createProfessionalTaxRegistration,
  getProfessionalTaxRegistrations,
} from "../../controller/Licenses and registrations/professionalTaxController.js";

const router = express.Router();

router.post("/professional-tax", createProfessionalTaxRegistration);
router.get("/professional-tax", getProfessionalTaxRegistrations);

export default router;
