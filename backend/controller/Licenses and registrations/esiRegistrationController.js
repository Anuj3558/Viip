import ESIRegistration from "../../models/Licenses and registrations/esiRegistration.js";

export const createESIRegistration = async (req, res) => {
  try {
    const newRegistration = new ESIRegistration(req.body);
    await newRegistration.save();
    res.status(201).json({
      success: true,
      message: "ESI Registration submitted successfully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting ESI Registration",
      error: error.message,
    });
  }
};

export const getESIRegistrations = async (req, res) => {
  try {
    const registrations = await ESIRegistration.find().sort({
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
      message: "Error fetching ESI Registrations",
      error: error.message,
    });
  }
};
