
import InternationalBusinessSetup from "../models/InsternantionBussinessSetupSchmea.js";

// Arrow function syntax for cleaner handlers
const HandleInternationalBusinessSetup = async (req, res) => {
  try {
    // Destructuring with default values for safety
    const { 

        name,
        email,
        phone,
        message,
        country,
      
    } = req.body;

    // Object property shorthand
    const newBusiness = new InternationalBusinessSetup({
      name,
      email,
      phone,
      message,
      country,
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
    HandleInternationalBusinessSetup, 
};

// Optional default export
// export default { HandleCompanyRegistration, HandleLLPFilingInquiry };
