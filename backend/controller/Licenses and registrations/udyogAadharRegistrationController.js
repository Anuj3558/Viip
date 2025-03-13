import UdyogAadharRegistration from "../../models/Licenses and registrations/udyogAadharRegistration.js";

export const createUdyogAadharRegistration = async (req, res) => {
  try {
    const newRegistration = new UdyogAadharRegistration(req.body);
    await newRegistration.save();
    res.status(201).json({
      success: true,
      message: "Udyog Aadhar Registration submitted successfully",
      data: newRegistration,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Udyog Aadhar Registration",
      error: error.message,
    });
  }
};

export const getUdyogAadharRegistrations = async (req, res) => {
  try {
    const registrations = await UdyogAadharRegistration.find().sort({
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
      message: "Error fetching Udyog Aadhar Registrations",
      error: error.message,
    });
  }
};
