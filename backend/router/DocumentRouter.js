import express from 'express';
import { HandleConsultsExpert } from '../controller/ConsultsExpertController.js';
import ConsultsExpert from '../models/ConsultsExpertSchmea.js';
import { HandleDocument } from '../controller/DocumentContoller.js';
import DocumentModel from '../models/DocumentModel.js';


const DocumentRouer = express.Router();


DocumentRouer.post("/legal-documents",HandleDocument)
DocumentRouer.post("/rental-agreement",HandleDocument)
DocumentRouer.post("/commercial-rental-agreement",HandleDocument)
DocumentRouer.post("/experience-letter",HandleDocument)
DocumentRouer.post("/appointment-letter",HandleDocument)
DocumentRouer.post("/affidavit-format",HandleDocument)
DocumentRouer.post("/power-of-attorney",HandleDocument)
DocumentRouer.post("/income-certificate",HandleDocument)
DocumentRouer.post("/no-objection-certificate",HandleDocument)
DocumentRouer.post("/salary-slip",HandleDocument)
DocumentRouer.post("/resignation-letter",HandleDocument)
DocumentRouer.post("/legal-heir-certificate",HandleDocument)
DocumentRouer.post("/relieving-letter",HandleDocument)
DocumentRouer.post("/bonafide-certificate",HandleDocument)
DocumentRouer.post("/gst-invoice",HandleDocument)
DocumentRouer.post("/authorized-signatory",HandleDocument)
DocumentRouer.post("/delivery-challan",HandleDocument)
DocumentRouer.post("/offer-letter",HandleDocument)
DocumentRouer.post("/consent-letter",HandleDocument)
DocumentRouer.post("/rent-receipt",HandleDocument)
DocumentRouer.post("/mou-drafting",HandleDocument)
DocumentRouer.post("/non-disclosure-agreement",HandleDocument)
DocumentRouer.post("/service-level-agreement",HandleDocument)
DocumentRouer.post("/non-disclosure-agreement",HandleDocument)
DocumentRouer.post("/non-compete-agreement",HandleDocument)
DocumentRouer.post("/master-service-agreement",HandleDocument)
DocumentRouer.post("/legal-heir-certificate",HandleDocument)
DocumentRouer.post("/joint-venture-agreement",HandleDocument)
DocumentRouer.post("/legal-documents",HandleDocument)
DocumentRouer.post("/gdpr",HandleDocument)
DocumentRouer.post("/franchise-agreement",HandleDocument)
DocumentRouer.post("/founder-agreement",HandleDocument)
DocumentRouer.post("/finance-agreement",HandleDocument)
DocumentRouer.post("/consultancy-agreement",HandleDocument)
DocumentRouer.post("/service-level-agreement",HandleDocument)
DocumentRouer.post("/shareholders-agreement",HandleDocument)
DocumentRouer.post("/share-purchase-agreement",HandleDocument)
DocumentRouer.post("/succession-certificate",HandleDocument)
DocumentRouer.post("/trade-license-certificate",HandleDocument)
DocumentRouer.post("/vendor-agreement",HandleDocument)
DocumentRouer.post("/relinquishment-deed",HandleDocument)
DocumentRouer.post("/scope-of-work-agreement",HandleDocument)
DocumentRouer.post("/will-registration",HandleDocument)
DocumentRouer.post("/sale-deed",HandleDocument)
DocumentRouer.post("/rental-tenant-notice",HandleDocument)
DocumentRouer.post("/probate-of-will",HandleDocument)
DocumentRouer.post("/gift-deed",HandleDocument)
DocumentRouer.post("/cheque-bounce-notice",HandleDocument)
DocumentRouer.post("/employment-agreement",HandleDocument)
DocumentRouer.post("/esop",HandleDocument)
DocumentRouer.post("/legal-notice-consumer-protection-act",HandleDocument)
DocumentRouer.post("/legal-notice-money-recovery",HandleDocument)
DocumentRouer.post("/legal-notice",HandleDocument)
DocumentRouer.post("/legal-notice-recovery-of-dues",HandleDocument)
DocumentRouer.post("/payroll-maintenance",HandleDocument)
DocumentRouer.post("/legal-documents",HandleDocument)
DocumentRouer.post("/legal-documents",HandleDocument)

DocumentRouer.get("/inquiries/type/:type", async (req, res) => {
    try {
      const type = req.params.type;
      const inquiries = await DocumentModel.find({ type: type });
      res.json({ data: inquiries });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


export default DocumentRouer;