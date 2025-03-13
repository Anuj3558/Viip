import DigitalSignatureCertificate from "../../models/Licenses and registrations/digitalSignatureCertificate.js";

export const createDigitalSignatureCertificate = async (req, res) => {
  try {
    const newCertificate = new DigitalSignatureCertificate(req.body);
    await newCertificate.save();
    res.status(201).json({
      success: true,
      message:
        "Digital Signature Certificate application submitted successfully",
      data: newCertificate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error submitting Digital Signature Certificate application",
      error: error.message,
    });
  }
};

export const getDigitalSignatureCertificates = async (req, res) => {
  try {
    const certificates = await DigitalSignatureCertificate.find().sort({
      registrationDate: -1,
    });
    res.status(200).json({
      success: true,
      count: certificates.length,
      data: certificates,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching Digital Signature Certificate applications",
      error: error.message,
    });
  }
};
