import express from "express";
import {
  createISO,
  getISOByType,
} from "../../controller/Licenses and registrations/isoController.js";

const router = express.Router();

// Main dynamic route
router.route("/iso/:isoType?").post(createISO).get(getISOByType);

// Specific type routes
const isoTypes = [
  "9000_2005",
  "9001",
  "13485",
  "14001",
  "22000",
  "27001",
  "26000",
  "31000",
];

// Configure specific ISO type routes
isoTypes.forEach((type) => {
  // POST route with parameter injection
  router.post(
    `/iso/${type}`,
    (req, _, next) => {
      req.params = { ...req.params, isoType: type };
      next();
    },
    createISO
  );

  // GET route with clean parameter handling
  router.get(`/iso/${type}`, (req, res) => {
    req.params.isoType = type;
    return getISOByType(req, res);
  });
});

export default router;
