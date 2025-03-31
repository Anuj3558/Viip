import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true,
    maxlength: 160 // Optimal for meta descriptions
  },
  tags: {
    type: [String],
    default: []
  },
  featuredImage: {
    type: String,
    default: ''
  },
  featuredImageAlt: {
    type: String,
    default: ''
  },
  metaDescription: {
    type: String,
    default: ''
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date,
    default: null
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  readingTime: {
    type: Number,
    default: 5 // in minutes
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  },
  toObject: {
    virtuals: true
  }
});

// Calculate reading time before saving
blogSchema.pre('save', function(next) {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(/\s+/).length;
  this.readingTime = Math.ceil(wordCount / wordsPerMinute);
  next();
});

// Indexes for better performance
blogSchema.index({ slug: 1 });
blogSchema.index({ isPublished: 1, publishedAt: -1 });
blogSchema.index({ tags: 1 });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;