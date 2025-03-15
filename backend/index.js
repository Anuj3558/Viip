import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import isoRouter from "./router/Licenses and registrations/isoRouter.js";
import professionalTaxRoutes from "./router/Licenses and registrations/professionalTaxRoutes.js";
import pfRegistrationRoutes from "./router/Licenses and registrations/pfRegistrationRoutes.js";
import ngoRegistrationRoutes from "./router/Licenses and registrations/ngoRegistrationRoutes.js";
import esiRegistrationRoutes from "./router/Licenses and registrations/esiRegistrationRoutes.js";
import udyogAadharRegistrationRoutes from "./router/Licenses and registrations/udyogAadharRegistrationRoutes.js";
import digitalSignatureCertificateRoutes from "./router/Licenses and registrations/digitalSignatureCertificateRoutes.js";
import legalMetrologyRegistrationRoutes from "./router/Licenses and registrations/legalMetrologyRegistrationRoutes.js";
import fssaiRegistrationRoutes from "./router/Licenses and registrations/fssaiRegistrationRoutes.js";
import psaraLicenseRoutes from "./router/Licenses and registrations/psaraLicenseRoutes.js";
import tradeLicenseRenewalRoutes from "./router/Licenses and registrations/tradeLicenseRenewalRoutes.js";
import BussinessSetupRouter from "./router/bussinessRouter.js";
import TrademarkRouter from "./router/TrademarkRouter.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/isoCertifications", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use("/api", isoRouter);
app.use("/api", professionalTaxRoutes);
app.use("/api", pfRegistrationRoutes);
app.use("/api", ngoRegistrationRoutes);
app.use("/api", esiRegistrationRoutes);
app.use("/api", udyogAadharRegistrationRoutes);
app.use("/api", digitalSignatureCertificateRoutes);
app.use("/api", legalMetrologyRegistrationRoutes);
app.use("/api", fssaiRegistrationRoutes);
app.use("/api", psaraLicenseRoutes);
app.use("/api", tradeLicenseRenewalRoutes);
app.use("/bussiness-setup", BussinessSetupRouter);
app.use("/trademark-ip", TrademarkRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
