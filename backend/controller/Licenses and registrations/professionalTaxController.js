import ProfessionalTax from "../../models/Licenses and registrations/professionalTax.js";

export const createProfessionalTaxRegistration = async (req, res) => {
  try {
    const newRegistration = new ProfessionalTax(req.body);
    await newRegistration.save();
    res.status(201).json({
      success: true,
      message: "Professional Tax Registration submitted successfully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Professional Tax Registration",
      error: error.message,
    });
  }
};

export const getProfessionalTaxRegistrations = async (req, res) => {
  try {
    const registrations = await ProfessionalTax.find().sort({
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
      message: "Error fetching Professional Tax Registrations",
      error: error.message,
    });
  }
};
