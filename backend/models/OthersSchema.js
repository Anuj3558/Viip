import mongoose from 'mongoose';

const { Schema } = mongoose;

const OthersSchema = new Schema({
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

const OthersModel = mongoose.model('Others', OthersSchema);

export default OthersModel;