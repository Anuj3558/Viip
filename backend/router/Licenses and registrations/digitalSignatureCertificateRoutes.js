import express from "express";
import {
  createDigitalSignatureCertificate,
  getDigitalSignatureCertificates,
} from "../../controller/Licenses and registrations/digitalSignatureCertificateController.js";

const router = express.Router();

router.post(
  "/digital-signature-certificate",
  createDigitalSignatureCertificate
);
router.get("/digital-signature-certificate", getDigitalSignatureCertificates);

export default router;
