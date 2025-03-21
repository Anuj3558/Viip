import OthersModel from "../models/OthersSchema.js";


// Arrow function syntax for cleaner handlers
const HandleOthers = async (req, res) => {
  try {
    // Destructuring with default values for safety
    const { 
      name , 
      email , 
      phone , 
      message , 
      type  
    } = req.body;

    // Object property shorthand
    const newOthers = new OthersModel({
      name,
      email,
      phone,
      message,
      type
    });

    const savedOthers = await newOthers.save();

    // Template literals for string construction
    res.status(201).json({
      success: true,
      message: `Others registration for ${name} created successfully`,
      data: savedOthers
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
    HandleOthers, 
};

// Optional default export
// export default { HandleCompanyRegistration, HandleLLPFilingInquiry };
