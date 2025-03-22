import DocumentModel from "../models/DocumentModel.js";


// Arrow function syntax for cleaner handlers
const HandleDocument = async (req, res) => {
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
    const newDocument = new DocumentModel({
      name,
      email,
      phone,
      message,
      type
    });

    const savedDocument = await newDocument.save();

    // Template literals for string construction
    res.status(201).json({
      success: true,
      message: `Document registration for ${name} created successfully`,
      data: savedDocument
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
    HandleDocument, 
};

// Optional default export
// export default { HandleCompanyRegistration, HandleLLPFilingInquiry };
