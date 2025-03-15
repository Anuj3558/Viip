import express from "express";
import {
  createIPServiceInquiry,
  getIPServiceInquiries,
  getIPServiceInquiryById,
} from "../controller/ipServiceController.js";

const router = express.Router();

// Base routes for all IP services
router.post("/:serviceType", createIPServiceInquiry);
router.get("/", getIPServiceInquiries);
router.get("/:id", getIPServiceInquiryById);

// Specific service routes
const serviceTypes = [
  "international-ip-protection",
  "ip-due-diligence",
  "ip-litigation-support",
  "ip-strategy-consulting",
  "copyright-registration",
  "industrial-design-registration",
  "ip-licensing",
  "ip-portfolio-management",
  "ip-valuation",
  "patent-registration",
];

// Create specific routes for each service type
serviceTypes.forEach((type) => {
  router.post(`/${type}`, createIPServiceInquiry);
});

export default router;
