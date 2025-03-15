import IPService from "../models/ipService.js";

// Helper function to determine service type from route
const getServiceTypeFromRoute = (route) => {
  const routeMap = {
    "/international-ip-protection": "International IP Protection",
    "/ip-due-diligence": "IP Due Diligence",
    "/ip-litigation-support": "IP Litigation Support",
    "/ip-strategy-consulting": "IP Strategy Consulting",
  };

  return routeMap[route] || "Unknown Service";
};

export const createIPServiceInquiry = async (req, res) => {
  try {
    const { route } = req.body;

    // Set the type based on the route if not provided
    if (!req.body.type) {
      req.body.type = getServiceTypeFromRoute(route);
    }

    const newInquiry = new IPService(req.body);
    await newInquiry.save();

    res.status(201).json({
      success: true,
      message: `${req.body.type} inquiry submitted successfully`,
      data: newInquiry,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting inquiry",
      error: error.message,
    });
  }
};

export const getIPServiceInquiries = async (req, res) => {
  try {
    const { type } = req.query;
    const query = type ? { type } : {};

    const inquiries = await IPService.find(query).sort({ submittedAt: -1 });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching inquiries",
      error: error.message,
    });
  }
};

export const getIPServiceInquiryById = async (req, res) => {
  try {
    const inquiry = await IPService.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching inquiry",
      error: error.message,
    });
  }
};
