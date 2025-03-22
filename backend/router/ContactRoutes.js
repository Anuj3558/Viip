import express from "express";
import {
  createContactInquiry,
  getAllContactInquiries,
  getContactInquiryById,
} from "../controller/ContactController.js";

const router = express.Router();

// POST Route: Create a new contact inquiry
router.post("/contact-inquiry", createContactInquiry);

// GET Routes
router.get("/contact-inquiries", getAllContactInquiries); // Get all contact inquiries
router.get("/contact-inquiries/:id", getContactInquiryById); // Get a single contact inquiry by ID

export default router;
