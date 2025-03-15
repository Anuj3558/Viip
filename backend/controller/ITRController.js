import ITRInquiry from "../models/ITRSchema.js";


// Arrow function syntax for cleaner handlers
const HandleITRRegistration = async (req, res) => {
  try {
    // Destructuring with default values for safety
    const { 
      name , 
      email , 
      phone , 
      message , 
      pan
    } = req.body;

    // Object property shorthand
    const newBusiness = new ITRInquiry({
      name,
      email,
      phone,
      message,
      pan
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
    HandleITRRegistration, 
};

// Optional default export
// export default { HandleCompanyRegistration, HandleLLPFilingInquiry };
