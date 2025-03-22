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
import ITRRouter from "./router/ITRRouter.js";
import ipServicesRouter from "./router/ipServiceRoutes.js";
import ConsultsExpertRouter from "./router/ConsultsExpertController.js";
import copyrightRouter from "./router/CopyrightRoutes.js";
import designRouter from "./router/designRouter.js";
import petentRouter from "./router/patentRouter.js";
import otherRouter from "./router/otherRouter.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import connectDB from "./connection.js";
import DocumentRouer from "./router/DocumentRouter.js";
import OtherRouter from "./router/OtherRouter.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
connectDB();

const JWT_SECRET = "ViipSecretKey"; // Secret key for JWT

// Mock user data (replace with a database in production)
const users = [
  {
    id: 1,
    email: "vastavintellect@login.com",
    password: bcrypt.hashSync("vastavviip", 10), // Hash the password
  },
];

// Login API endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Find user by email
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  // Successful login
  res.status(200).json({ message: "Login successful!", token });
});

// Protected route example
app.get("/api/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  // Verify JWT token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token." });
    }

    // Token is valid
    res.status(200).json({ message: "Access granted!", user: decoded });
  });
});

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
app.use("/api", ipServicesRouter);
app.use("/bussiness-setup", BussinessSetupRouter);
app.use("/trademark-ip", TrademarkRouter);
app.use("/accounting", ITRRouter);
app.use("/expert", ConsultsExpertRouter);
app.use("/copyright", copyrightRouter);
app.use("/design", designRouter);
app.use("/patent", petentRouter);
app.use("/other", otherRouter);
app.use("/document",DocumentRouer)
app.use("/others",OtherRouter)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
