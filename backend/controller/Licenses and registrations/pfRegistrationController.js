import PFRegistration from "../../models/Licenses and registrations/pfRegistration.js";

export const createPFRegistration = async (req, res) => {
  try {
    const newRegistration = new PFRegistration(req.body);
    await newRegistration.save();
    res.status(201).json({
      success: true,
      message: "PF Registration submitted successfully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting PF Registration",
      error: error.message,
    });
  }
};

export const getPFRegistrations = async (req, res) => {
  try {
    const registrations = await PFRegistration.find().sort({
      registrationDate: -1,
    });
    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching PF Registrations",
      error: error.message,
    });
  }
};
