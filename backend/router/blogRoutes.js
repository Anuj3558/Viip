import express from 'express';
import Blog from '../models/blog.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Error: Images only!');
    }
  }
});

// Public routes
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find({ isPublished: true })
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Blog.countDocuments({ isPublished: true })
    ]);

    // Add full URL to featured images
    const blogsWithFullImageUrl = blogs.map(blog => ({
      ...blog,
      featuredImage: blog.featuredImage ? `${req.protocol}://${req.get('host')}/uploads/${path.basename(blog.featuredImage)}` : null
    }));

    res.json({
      blogs: blogsWithFullImageUrl,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin routes
router.get('/admin/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .populate('author', 'name email')
      .lean();
      
    // Add full URL to featured images
    const blogsWithFullImageUrl = blogs.map(blog => ({
      ...blog,
      featuredImage: blog.featuredImage ? `${process.env.FILE}/uploads/${path.basename(blog.featuredImage)}` : null
    }));

    res.json(blogsWithFullImageUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get single blog by ID (public route)
router.get('/blogs/:id', async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id).lean();
      
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // Only return published blogs unless it's an admin request
      if (!blog.isPublished && !req.user?.isAdmin) {
        return res.status(403).json({ message: 'This blog is not published' });
      }
     const featuredImage = blog.featuredImage ? `${process.env.FILE}${blog.featuredImage}` : null;
      // Add full URL to featured image
      const blogWithFullImageUrl = {
        ...blog,
        featuredImage:  `${process.env.FILE}${blog.featuredImage}` 
      };
      console.log(featuredImage)
      res.json(blogWithFullImageUrl);
    } catch (err) {
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid blog ID format' });
      }
      res.status(500).json({ message: err.message });
    }
  });
router.post('/admin/blogs', upload.single('featuredImage'), async (req, res) => {
  try {
    const { 
      title, 
      slug, 
      content, 
      excerpt, 
      tags, 
      featuredImageAlt, 
      metaDescription, 
      isPublished 
    } = req.body;

    // Validate required fields
    if (!title || !slug || !content || !excerpt) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res.status(400).json({ message: 'Slug already exists' });
    }
      const path= req.file.path.slice(15);
      console.log

    const blog = new Blog({
      title,
      slug,
      content,
      excerpt,
      tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()),
      featuredImage: path|| null,
      featuredImageAlt,
      metaDescription,
      isPublished,
      author: "Vastav Intellect and Ip Solutions",
      publishedAt: isPublished ? new Date() : null
    });

    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ 
      message: err.message,
      errors: err.errors ? Object.fromEntries(
        Object.entries(err.errors).map(([key, value]) => [key, value.message])
      ) : null
    });
  }
});

router.put('/admin/blogs/:id', upload.single('featuredImage'), async (req, res) => {
  try {
    const { 
      title, 
      slug, 
      content, 
      excerpt, 
      tags, 
      featuredImageAlt, 
      metaDescription, 
      isPublished 
    } = req.body;

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Check if slug is being changed and if new slug already exists
    if (blog.slug !== slug) {
      const existingBlog = await Blog.findOne({ slug });
      if (existingBlog && existingBlog._id.toString() !== req.params.id) {
        return res.status(400).json({ message: 'Slug already exists' });
      }
    }

    // Update fields
    const updates = {
      title,
      slug,
      content,
      excerpt,
      tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()),
      featuredImageAlt,
      metaDescription,
      isPublished
    };

    // Update featured image if new one was uploaded
    if (req.file) {
      updates.featuredImage = req.file.path;
    }

    // If publishing for the first time, set publishedAt
    if (!blog.isPublished && isPublished) {
      updates.publishedAt = new Date();
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).populate('author', 'name email');

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ 
      message: err.message,
      errors: err.errors ? Object.fromEntries(
        Object.entries(err.errors).map(([key, value]) => [key, value.message])
      ) : null
    });
  }
});
router.delete('/admin/blogs/:id',  async (req, res) => {
    try {
      const blog = await Blog.findByIdAndDelete(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json({ message: 'Blog deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export default router;