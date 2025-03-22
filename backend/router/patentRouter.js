import express from "express";
import {
  createPatentInquiry,
  getAllPatentInquiries,
  getPatentInquiriesByType,
} from "../controller/PatentController.js";

const router = express.Router();

// POST Routes
router.post("/provisional-patent-application", createPatentInquiry); // For provisional patent applications
router.post("/patent-registration", createPatentInquiry); // For patent registration
router.post("/patent-inquiry", createPatentInquiry); // Consolidated route for all patent inquiries
router.post("/patent-infringement", createPatentInquiry);
// GET Routes
router.get("/patent-inquiries", getAllPatentInquiries); // Get all patent inquiries
router.get("/patent-inquiries/:type", getPatentInquiriesByType); // Get patent inquiries by type

export default router;
