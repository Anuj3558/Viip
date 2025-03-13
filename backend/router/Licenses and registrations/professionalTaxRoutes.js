import express from "express";
import { createProfessionalTaxRegistration } from "../../controller/Licenses and registrations/professionalTaxController.js";

const router = express.Router();

router.post("/professional-tax", createProfessionalTaxRegistration);

export default router;
