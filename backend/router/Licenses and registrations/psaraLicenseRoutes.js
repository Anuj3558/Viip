import express from "express";
import {
  createPSARALicense,
  getPSARALicenses,
} from "../../controller/Licenses and registrations/psaraLicenseController.js";

const router = express.Router();

router.post("/psara-license", createPSARALicense);
router.get("/psara-license", getPSARALicenses);

export default router;
