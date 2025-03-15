import ITRInquiry from "../models/ITRSchema.js";
import PayrollManagement from "../models/PayrollManagement.js";


// Arrow function syntax for cleaner handlers
const PayrollManagementInquriy = async (req, res) => {
  try {
    // Destructuring with default values for safety
    const { 
        companyName,
        name,
        email,
        phone,
        employeeCount,
        message,
    } = req.body;

    // Object property shorthand
    const newBusiness = new PayrollManagement({
        companyName,
        name,
        email,
        phone,
        employeeCount,
        message,
    });

    const savedBusiness = await newBusiness.save();

    // Template literals for string construction
    res.status(201).json({
      success: true,
      message: `Business registration for ${name} created successfully`,
      data: savedBusiness
    });

  } catch (error) {
    // Optional error destructuring
    const { message: errorMsg, stack } = error;
    
    console.error(`Registration Error [${new Date().toISOString()}]:`, errorMsg);
    
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: process.env.NODE_ENV === 'development' ? { errorMsg, stack } : errorMsg
    });
  }
};


// Named exports using ES6 module syntax
export { 
    PayrollManagementInquriy, 
};

// Optional default export
// export default { HandleCompanyRegistration, HandleLLPFilingInquiry };
