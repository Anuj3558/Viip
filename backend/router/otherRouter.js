import express from 'express';
import {
  HandleOthers,
  getOthersByType,
} from "../controller/otherController.js";



const OtherRouter = express.Router();

OtherRouter.post("/business-loan",HandleOthers)
OtherRouter.post("/dpr-service",HandleOthers)
OtherRouter.post("/fundraising",HandleOthers)
OtherRouter.post("/pitch-deck",HandleOthers)
OtherRouter.post("/csr1-filing",HandleOthers)
OtherRouter.post("/darpan-registration",HandleOthers)
OtherRouter.post("/fcra-registration",HandleOthers)
OtherRouter.post("/ngo-compliance",HandleOthers)
OtherRouter.post("/section-8-company",HandleOthers)
OtherRouter.post("/section8-compliance",HandleOthers)
OtherRouter.post("/section80g-12a",HandleOthers)
OtherRouter.post("/society-registration",HandleOthers)
OtherRouter.post("/trust-registration",HandleOthers)
OtherRouter.post("/college-immigration",HandleOthers)
OtherRouter.post("/corporate-immigration",HandleOthers)
OtherRouter.post("/court-marriage",HandleOthers)
OtherRouter.post("/divorce-alimony",HandleOthers)
OtherRouter.post("/family-immigration",HandleOthers)
OtherRouter.post("/gender-change",HandleOthers)
OtherRouter.post("/gun-license",HandleOthers)
OtherRouter.post("/marriage-registration",HandleOthers)
OtherRouter.post("/mutual-divorce",HandleOthers)
OtherRouter.post("/online-consumer-complaint",HandleOthers)
OtherRouter.post("/name-change",HandleOthers)
OtherRouter.post("/property-registration",HandleOthers)
OtherRouter.post("/property-registration",HandleOthers)
OtherRouter.post("/property-title-verification",HandleOthers)
OtherRouter.post("/restitution-of-conjugal-rights",HandleOthers)
OtherRouter.post("/online-police-complaint",HandleOthers)
OtherRouter.post("/rera-complaint",HandleOthers)
OtherRouter.post("/religion-change",HandleOthers)


OtherRouter.get("/:type",getOthersByType)

export default OtherRouter;