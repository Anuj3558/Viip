import NGORegistration from "../../models/Licenses and registrations/ngoRegistration.js";

export const createNGORegistration = async (req, res) => {
  try {
    const newRegistration = new NGORegistration(req.body);
    await newRegistration.save();
    res.status(201).json({
      success: true,
      message: "NGO Registration submitted successfully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting NGO Registration",
      error: error.message,
    });
  }
};

export const getNGORegistrations = async (req, res) => {
  try {
    const registrations = await NGORegistration.find().sort({
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
      message: "Error fetching NGO Registrations",
      error: error.message,
    });
  }
};
