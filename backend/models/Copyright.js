import mongoose from 'mongoose';

const { Schema } = mongoose;

const CopyrightSchema = new Schema({
  name: {
    type: String,
    required: true,
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
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const CopyrightModel = mongoose.model("Copyright", CopyrightSchema);

export default CopyrightModel;