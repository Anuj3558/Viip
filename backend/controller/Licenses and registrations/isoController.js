import ISO from "../../models/Licenses and registrations/iso.js";

export const createISO = async (req, res) => {
  try {
    const isoType = req.params.isoType || req.body.isoType || "general";

    const isoData = new ISO({
      ...req.body,
      isoType,
    });

    await isoData.save();

    res.status(201).json({
      success: true,
      message: "ISO data saved successfully",
      data: isoData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error saving ISO data",
      error: error.message,
    });
  }
};

export const getISOByType = async (req, res) => {
  try {
    const { isoType } = req.params;
    const query = isoType ? { isoType } : {};

    const isoData = await ISO.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: isoData.length,
      data: isoData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching ISO data",
      error: error.message,
    });
  }
};
