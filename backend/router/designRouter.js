import express from "express";
import {
  createDesignInquiry,
  getDesignInquiriesByType,
  getAllDesignInquiries,
} from "../controller/designController.js";

const router = express.Router();

// POST Routes
router.post("/design-registration", createDesignInquiry); // For design registration inquiries
router.post("/logo-design", createDesignInquiry); // For logo design inquiries
router.post("/design-inquiry", createDesignInquiry); // Consolidated route for all design inquiries

// GET Routes
router.get("/design-inquiries", getAllDesignInquiries); // Get all design inquiries
router.get("/design-inquiries/:type", getDesignInquiriesByType); // Get design inquiries by type

export default router;
