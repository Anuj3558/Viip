import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true }
});

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  featuredImage: { type: String },
  featuredImageAlt: { type: String },
  metaDescription: { type: String },
  stats: [statSchema],
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

achievementSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Achievement = mongoose.model('Achievement', achievementSchema);

export default Achievement;