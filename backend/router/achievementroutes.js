import express from 'express';
import Achievement from '../models/achievementmodel.js';
import { upload } from './blogRoutes.js';

const Achievementrouter = express.Router();

// Get all published achievements (paginated)
Achievementrouter.get('/achievements', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const [achievements, total] = await Promise.all([
      Achievement.find({ isPublished: true })
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit),
      Achievement.countDocuments({ isPublished: true })
    ]);

    res.json({
      achievements,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single achievement by slug
Achievementrouter.get('/achievements/:slug', async (req, res) => {
  console.log(req.params.slug);
  try {
    const achievement = await Achievement.findOne({ 
      slug: req.params.slug,
      isPublished: true 
    });

    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.json(achievement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get related achievements
Achievementrouter.get('/achievements/related/:slug', async (req, res) => {
  try {
    const currentAchievement = await Achievement.findOne({ slug: req.params.slug });
    
    if (!currentAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    const related = await Achievement.find({
      _id: { $ne: currentAchievement._id },
      category: currentAchievement.category,
      isPublished: true
    }).limit(3);

    res.json(related);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
Achievementrouter.get('/achievements/:id', async (req, res) => {
  try {
    const currentAchievement = await Achievement.findById(req.params.id);
    
    if (!currentAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.json(currentAchievement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Admin routes
Achievementrouter.post('/admin/achievements', upload.single('featuredImage'), async (req, res) => {
  try {
    const { title, slug, excerpt, content, category, date, featuredImageAlt, metaDescription, stats, isPublished } = req.body;
    const filepath = `${process.env.FILE}${req.file?.path.slice(15)}`;
    
    const achievement = new Achievement({
      title,
      slug,
      excerpt,
      content,
      category,
      date,
      featuredImage: filepath,
      featuredImageAlt,
      metaDescription,
      stats: JSON.parse(stats || '[]'),
      isPublished
    });

    await achievement.save();
    res.status(201).json(achievement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

Achievementrouter.put('/admin/achievements/:id',  upload.single('featuredImage'), async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    const { title, slug, excerpt, content, category, date, featuredImageAlt, metaDescription, stats, isPublished } = req.body;

    achievement.title = title;
    achievement.slug = slug;
    achievement.excerpt = excerpt;
    achievement.content = content;
    achievement.category = category;
    achievement.date = date;
    achievement.featuredImageAlt = featuredImageAlt;
    achievement.metaDescription = metaDescription;
    achievement.stats = JSON.parse(stats || '[]');
    achievement.isPublished = isPublished;
    const filepath = `${process.env.FILE}${req.file?.path.slice(15)}`;

    if (req.file) {
      achievement.featuredImage = filepath;
    }
    
    await achievement.save();
    res.json(achievement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

Achievementrouter.delete('/admin/achievements/:id',  async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id);
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.json({ message: 'Achievement deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default Achievementrouter;