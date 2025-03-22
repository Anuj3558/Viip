import PatentModel from "../models/PatentModel.js";

// Create a new patent inquiry
const createPatentInquiry = async (req, res) => {
  try {
    // Destructure the request body
    const { name, email, phone, message, type } = req.body;

    

    // Create a new patent inquiry document
    const newPatent = new PatentModel({
      name,
      email,
      phone,
      message,
      type,
    });

    // Save the document to the database
    const savedPatent = await newPatent.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: `Patent inquiry for ${name} created successfully`,
      data: savedPatent,
    });
  } catch (error) {
    // Destructure the error for better logging
    const { message: errorMsg, stack } = error;

    // Log the error
    console.error(
      `Patent Inquiry Error [${new Date().toISOString()}]:`,
      errorMsg
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Patent inquiry creation failed",
      error:
        process.env.NODE_ENV === "development" ? { errorMsg, stack } : errorMsg,
    });
  }
};

// Get all patent inquiries
const getAllPatentInquiries = async (req, res) => {
  try {
    // Fetch all patent inquiries from the database
    const inquiries = await PatentModel.find({});
    res.status(200).json({
      success: true,
      message: "All patent inquiries fetched successfully",
      data: inquiries,
    });
  } catch (error) {
    // Log the error
    console.error(
      `Get All Patent Inquiries Error [${new Date().toISOString()}]:`,
      error.message
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Failed to fetch patent inquiries",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Get patent inquiries by type
const getPatentInquiriesByType = async (req, res) => {
  try {
    const type = req.params.type; // Get the type from the URL parameter

    

    // Fetch inquiries by type from the database
    const inquiries = await PatentModel.find({ type });

    res.status(200).json({
      success: true,
      message: `Patent inquiries for type '${type}' fetched successfully`,
      data: inquiries,
    });
  } catch (error) {
    // Log the error
    console.error(
      `Get Patent Inquiries by Type Error [${new Date().toISOString()}]:`,
      error.message
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Failed to fetch patent inquiries by type",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Export the functions
export { createPatentInquiry, getAllPatentInquiries, getPatentInquiriesByType };
