import mongoose from 'mongoose';

const { Schema } = mongoose;

const TrademarkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const TrademarkModel = mongoose.model('Trademark', TrademarkSchema);

export default TrademarkModel;