import express from "express";
import {
  createIPServiceInquiry,
  getIPServiceInquiries,
  getIPServiceInquiriesByType,
} from "../controller/ipServiceController.js";

const router = express.Router();

// Main dynamic route that handles all types
router
  .route("/ip-service/:serviceType?")
  .post(createIPServiceInquiry)
  .get(getIPServiceInquiriesByType);

// Get all inquiries
router.get("/ip-service", getIPServiceInquiries);

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

// Configure specific service type routes
serviceTypes.forEach((type) => {
  // POST route with parameter injection
  router.post(
    `/${type}`,
    (req, _, next) => {
      req.params = { ...req.params, serviceType: type };
      next();
    },
    createIPServiceInquiry
  );

  // GET route with clean parameter handling
  router.get(`/${type}`, (req, res) => {
    req.params.serviceType = type;
    return getIPServiceInquiriesByType(req, res);
  });
});

export default router;
