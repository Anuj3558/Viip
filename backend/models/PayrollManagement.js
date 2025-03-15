import mongoose from 'mongoose';

const payrollManagementSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    employeeCount: { type: Number, required: true },
    message: { type: String }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const PayrollManagement = mongoose.model('PayrollManagement', payrollManagementSchema);

export default PayrollManagement;
