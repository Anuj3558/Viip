import FSSAIRegistration from "../../models/Licenses and registrations/fssaiRegistration.js";

export const createFSSAIRegistration = async (req, res) => {
  try {
    const newRegistration = new FSSAIRegistration(req.body);
    await newRegistration.save();
    res.status(201).json({
      success: true,
      message: "FSSAI Registration submitted successfully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting FSSAI Registration",
      error: error.message,
    });
  }
};

export const getFSSAIRegistrations = async (req, res) => {
  try {
    const registrations = await FSSAIRegistration.find().sort({
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
      message: "Error fetching FSSAI Registrations",
      error: error.message,
    });
  }
};
