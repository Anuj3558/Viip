  // CopyrightRoutes.js
  import express from "express";
  import {
    createCopyrightInquiry,
    getCopyrightInquiriesByType,
    getAllCopyrightInquiries,
  } from "../controller/CopyrightController.js";

  const router = express.Router();

  // POST Routes
  router.post("/copyright-music", createCopyrightInquiry);
  router.post("/copyright-registration", createCopyrightInquiry);
  router.post("/copyright-infringement", createCopyrightInquiry);

  // GET Routes
  router.get("/copyright-inquiries/:type", getCopyrightInquiriesByType); // Get inquiries by type
  router.get("/copyright-inquiries", getAllCopyrightInquiries); // Get all inquiries

  export default router;
