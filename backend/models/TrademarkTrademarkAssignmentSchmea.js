import mongoose from 'mongoose';

const trademarkAssignmentSchema = new mongoose.Schema({
    trademarkName: {
        type: String,
        required: true
    },
    assignorName: {
        type: String,
        required: true
    },
    assigneeName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String
    },
}, {
    timestamps: true
});

const TrademarkAssignment = mongoose.model('TrademarkAssignment', trademarkAssignmentSchema);

export default TrademarkAssignment;
