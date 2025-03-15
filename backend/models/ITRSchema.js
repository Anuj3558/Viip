import mongoose from 'mongoose';

const itrInquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    pan: { type: String, required: true },
    message: { type: String }
}, {
    timestamps: true
});

const ITRInquiry = mongoose.model('ITRInquiry', itrInquirySchema);

export default ITRInquiry;
