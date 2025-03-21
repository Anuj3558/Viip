import IPService from "../models/ipService.js";

// Service type mapping
const serviceTypeMap = {
  "international-ip-protection": "International IP Protection",
  "ip-due-diligence": "IP Due Diligence",
  "ip-litigation-support": "IP Litigation Support",
  "ip-strategy-consulting": "IP Strategy Consulting",
  "copyright-registration": "Copyright Registration",
  "industrial-design-registration": "Industrial Design Registration",
  "ip-licensing": "IP Licensing",
  "ip-portfolio-management": "IP Portfolio Management",
  "ip-valuation": "IP Valuation",
  "patent-registration": "Patent Registration",
};

export const createIPServiceInquiry = async (req, res) => {
  try {
    const serviceType =
      req.params.serviceType ||
      req.body.serviceType ||
      "international-ip-protection";

    // Convert route parameter to display name
    const type = serviceTypeMap[serviceType] || "Unknown Service";

    const ipServiceData = new IPService({
      ...req.body,
      type,
      
    });

    await ipServiceData.save();

    res.status(201).json({
      success: true,
      message: `${type} inquiry submitted successfully`,
      data: ipServiceData,
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
    const inquiries = await IPService.find().sort({ submittedAt: -1 });

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

export const getIPServiceInquiriesByType = async (req, res) => {
  try {
    const { serviceType } = req.params;
    let query = {};

    if (serviceType) {
      const type = serviceTypeMap[serviceType];
      if (!type) {
        return res.status(400).json({
          success: false,
          message: "Invalid service type",
        });
      }
      query = { type };
    }

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
