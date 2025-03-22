import ContactModel from "../models/ContactModel.js";

// Create a new contact inquiry
const createContactInquiry = async (req, res) => {
  try {
    // Destructure the request body
    const { name, email, subject, message } = req.body;

    // Create a new contact inquiry document
    const newContact = new ContactModel({
      name,
      email,
      subject,
      message,
    });

    // Save the document to the database
    const savedContact = await newContact.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: `Contact inquiry for ${name} created successfully`,
      data: savedContact,
    });
  } catch (error) {
    // Destructure the error for better logging
    const { message: errorMsg, stack } = error;

    // Log the error
    console.error(
      `Contact Inquiry Error [${new Date().toISOString()}]:`,
      errorMsg
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Contact inquiry creation failed",
      error:
        process.env.NODE_ENV === "development" ? { errorMsg, stack } : errorMsg,
    });
  }
};

// Get all contact inquiries
const getAllContactInquiries = async (req, res) => {
  try {
    // Fetch all contact inquiries from the database
    const inquiries = await ContactModel.find({});

    // Send a success response
    res.status(200).json({
      success: true,
      message: "All contact inquiries fetched successfully",
      data: inquiries,
    });
  } catch (error) {
    // Log the error
    console.error(
      `Get All Contact Inquiries Error [${new Date().toISOString()}]:`,
      error.message
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact inquiries",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Get a single contact inquiry by ID
const getContactInquiryById = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL parameter

    // Fetch the contact inquiry by ID
    const inquiry = await ContactModel.findById(id);

    // If inquiry not found, return a 404 error
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Contact inquiry not found",
      });
    }

    // Send a success response
    res.status(200).json({
      success: true,
      message: "Contact inquiry fetched successfully",
      data: inquiry,
    });
  } catch (error) {
    // Log the error
    console.error(
      `Get Contact Inquiry by ID Error [${new Date().toISOString()}]:`,
      error.message
    );

    // Send an error response
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact inquiry",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Export the functions
export { createContactInquiry, getAllContactInquiries, getContactInquiryById };
