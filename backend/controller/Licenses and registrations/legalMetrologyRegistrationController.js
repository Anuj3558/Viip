import LegalMetrologyRegistration from "../../models/Licenses and registrations/legalMetrologyRegistration.js";

export const createLegalMetrologyRegistration = async (req, res) => {
  try {
    const newRegistration = new LegalMetrologyRegistration(req.body);
    await newRegistration.save();
    res.status(201).json({
      success: true,
      message: "Legal Metrology Registration submitted successfully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Legal Metrology Registration",
      error: error.message,
    });
  }
};

export const getLegalMetrologyRegistrations = async (req, res) => {
  try {
    const registrations = await LegalMetrologyRegistration.find().sort({
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
      message: "Error fetching Legal Metrology Registrations",
      error: error.message,
    });
  }
};
