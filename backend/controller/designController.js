import DesignModel from "../models/design.js";

// Define valid types for design inquiries
const validTypes = ["logo-design", "design-registration"];

// Create a new design inquiry
const createDesignInquiry = async (req, res) => {
  try {
    // Destructure the request body
    const { name, email, phone, message, type } = req.body;

    // Validate the type field
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid type. Allowed values: logo-design, design-registration",
      });
    }

    // Create a new design inquiry document
    const newDesign = new DesignModel({
      name,
      email,
      phone,
      message,
      type,
    });

    // Save the document to the database
    const savedDesign = await newDesign.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: `Design inquiry for ${name} created successfully`,
      data: savedDesign,
    });
  } catch (error) {
    // Destructure the error for better logging
    const { message: errorMsg, stack } = error;

    // Log the error
    console.error(
      `Design Inquiry Error [${new Date().toISOString()}]:`,
      errorMsg
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Design inquiry creation failed",
      error:
        process.env.NODE_ENV === "development" ? { errorMsg, stack } : errorMsg,
    });
  }
};

// Get all design inquiries
const getAllDesignInquiries = async (req, res) => {
  try {
    // Fetch all design inquiries from the database
    const inquiries = await DesignModel.find({});
    res.status(200).json({
      success: true,
      message: "All design inquiries fetched successfully",
      data: inquiries,
    });
  } catch (error) {
    // Log the error
    console.error(
      `Get All Design Inquiries Error [${new Date().toISOString()}]:`,
      error.message
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Failed to fetch design inquiries",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Get design inquiries by type
const getDesignInquiriesByType = async (req, res) => {
  try {
    const type = req.params.type; // Get the type from the URL parameter

    // Validate the type field
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid type. Allowed values: logo-design, design-registration",
      });
    }

    // Fetch inquiries by type from the database
    const inquiries = await DesignModel.find({ type });

    res.status(200).json({
      success: true,
      message: `Design inquiries for type '${type}' fetched successfully`,
      data: inquiries,
    });
  } catch (error) {
    // Log the error
    console.error(
      `Get Design Inquiries by Type Error [${new Date().toISOString()}]:`,
      error.message
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Failed to fetch design inquiries by type",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Export the functions
export { createDesignInquiry, getAllDesignInquiries, getDesignInquiriesByType };
