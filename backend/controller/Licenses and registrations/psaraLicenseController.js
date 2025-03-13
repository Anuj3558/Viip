import PSARALicense from "../../models/Licenses and registrations/psaraLicense.js";

export const createPSARALicense = async (req, res) => {
  try {
    const newLicense = new PSARALicense(req.body);
    await newLicense.save();
    res.status(201).json({
      success: true,
      message: "PSARA License application submitted successfully",
      data: newLicense,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting PSARA License application",
      error: error.message,
    });
  }
};

export const getPSARALicenses = async (req, res) => {
  try {
    const licenses = await PSARALicense.find().sort({ registrationDate: -1 });
    res.status(200).json({
      success: true,
      count: licenses.length,
      data: licenses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching PSARA License applications",
      error: error.message,
    });
  }
};
