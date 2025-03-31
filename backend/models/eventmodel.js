import mongoose from 'mongoose';

const speakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String },
  company: { type: String },
  avatar: { type: String },
  bio: { type: String }
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  eventType: { type: String, required: true, enum: ['conference', 'webinar', 'workshop', 'meetup'] },
  locationType: { type: String, required: true, enum: ['physical', 'online'], default: 'physical' },
  location: { type: String },
  address: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  startTime: { type: String },
  endTime: { type: String },
  featuredImage: { type: String },
  featuredImageAlt: { type: String },
  metaDescription: { type: String },
  registrationLink: { type: String },
  speakers: [speakerSchema],
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

eventSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

eventSchema.index({ startDate: 1 });
eventSchema.index({ eventType: 1 });
eventSchema.index({ locationType: 1 });

const Event = mongoose.model('Event', eventSchema);

export default Event;