import TradeLicenseRenewal from "../../models/Licenses and registrations/tradeLicenseRenewal.js";

export const createTradeLicenseRenewal = async (req, res) => {
  try {
    const newRenewal = new TradeLicenseRenewal(req.body);
    await newRenewal.save();
    res.status(201).json({
      success: true,
      message: "Trade License Renewal application submitted successfully",
      data: newRenewal,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Trade License Renewal application",
      error: error.message,
    });
  }
};

export const getTradeLicenseRenewals = async (req, res) => {
  try {
    const renewals = await TradeLicenseRenewal.find().sort({
      registrationDate: -1,
    });
    res.status(200).json({
      success: true,
      count: renewals.length,
      data: renewals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching Trade License Renewal applications",
      error: error.message,
    });
  }
};
