import express from 'express';
import Event from '../../models/eventmodel.js';
import { upload } from '../blogRoutes.js';

const event = express.Router();

// Get events with filtering
event.get('/events', async (req, res) => {
  try {


    let query = { isPublished: true };
    const now = new Date();


    const [events, total] = await Promise.all([
      Event.find(query)
    ]);

    res.json({
      events,

    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single event by slug
event.get('/events/:slug', async (req, res) => {
  try {
    const event = await Event.findOne({ 
      slug: req.params.slug,
      isPublished: true 
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
event.get('/admin/events/:id', async (req, res) => {
    try {
      const event = await Event.findOne({ 
        _id: req.params.id,
        isPublished: true
      });
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      res.json(event);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Get related events
event.get('/related/:slug', async (req, res) => {
  try {
    const currentEvent = await Event.findOne({ slug: req.params.slug });
    
    if (!currentEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const related = await Event.find({
      _id: { $ne: currentEvent._id },
      eventType: currentEvent.eventType,
      isPublished: true
    }).limit(3);

    res.json(related);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin routes
event.post('/admin/events',  upload.single('featuredImage'), async (req, res) => {
  try {
    const { 
      title, 
      slug, 
      excerpt, 
      content, 
      eventType, 
      locationType, 
      location, 
      address,
      startDate, 
      endDate, 
      startTime, 
      endTime,
      registrationLink,
      featuredImageAlt, 
      metaDescription, 
      speakers,
      isPublished 
    } = req.body;
    const filepath = `${process.env.FILE}${req.file?.path.slice(15)}`  // Use the file path if available
    const event = new Event({
      title,
      slug,
      excerpt,
      content,
      eventType,
      locationType,
      location,
      address,
      startDate,
      endDate,
      startTime,
      endTime,
      registrationLink,
      featuredImage: filepath,
      featuredImageAlt,
      metaDescription,
      speakers: JSON.parse(speakers || '[]'),
      isPublished
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

event.put('/admin/events/:id',  upload.single('featuredImage'), async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    const filepath = `${process.env.FILE}${req.file?.path.slice(15)}`  // Use the file path if available

    const { 
      title, 
      slug, 
      excerpt, 
      content, 
      eventType, 
      locationType, 
      location, 
      address,
      startDate, 
      endDate, 
      startTime, 
      endTime,
      registrationLink,
      featuredImageAlt, 
      metaDescription, 
      speakers,
      isPublished 
    } = req.body;

    event.title = title;
    event.slug = slug;
    event.excerpt = excerpt;
    event.content = content;
    event.eventType = eventType;
    event.locationType = locationType;
    event.location = location;
    event.address = address;
    event.startDate = startDate;
    event.endDate = endDate;
    event.startTime = startTime;
    event.endTime = endTime;
    event.registrationLink = registrationLink;
    event.featuredImageAlt = featuredImageAlt;
    event.metaDescription = metaDescription;
    event.speakers = JSON.parse(speakers || '[]');
    event.isPublished = isPublished;

    if (req.file) {
      event.featuredImage =filepath;
    }

    await event.save();
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

event.delete('/admin/events/:id',  async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default event;