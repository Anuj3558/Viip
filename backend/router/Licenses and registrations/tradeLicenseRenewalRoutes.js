import express from "express";
import {
  createTradeLicenseRenewal,
  getTradeLicenseRenewals,
} from "../../controller/Licenses and registrations/tradeLicenseRenewalController.js";

const router = express.Router();

router.post("/trade-license-renewal", createTradeLicenseRenewal);
router.get("/trade-license-renewal", getTradeLicenseRenewals);

export default router;
