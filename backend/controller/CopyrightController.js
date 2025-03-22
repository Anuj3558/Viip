// CopyrightController.js
import CopyrightModel from "../models/Copyright.js";

// Create Copyright Inquiry
const createCopyrightInquiry = async (req, res) => {
  try {
    const { name, email, phone, message, type } = req.body;

    const newCopyright = new CopyrightModel({
      name,
      email,
      phone,
      message,
      type,
    });

    const savedCopyright = await newCopyright.save();

    res.status(201).json({
      success: true,
      message: `Copyright inquiry for ${name} created successfully`,
      data: savedCopyright,
    });
  } catch (error) {
    const { message: errorMsg, stack } = error;

    console.error(
      `Copyright Inquiry Error [${new Date().toISOString()}]:`,
      errorMsg
    );

    res.status(500).json({
      success: false,
      message: "Copyright inquiry creation failed",
      error:
        process.env.NODE_ENV === "development" ? { errorMsg, stack } : errorMsg,
    });
  }
};

// Get Copyright Inquiries by Type
const getCopyrightInquiriesByType = async (req, res) => {
  try {
    const type = req.params.type; // Get the type from the URL parameter
    const inquiries = await CopyrightModel.find({ type: type }); // Find inquiries by type
    res.json({data:inquiries}); // Return the inquiries
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

// Get All Copyright Inquiries
const getAllCopyrightInquiries = async (req, res) => {
  try {
    const inquiries = await CopyrightModel.find({}); // Find all inquiries
    res.json(inquiries); // Return all inquiries
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

// Export the functions
export {
  createCopyrightInquiry,
  getCopyrightInquiriesByType,
  getAllCopyrightInquiries,
};
