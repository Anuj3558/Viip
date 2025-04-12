import express from 'express';
import Testimonial from '../models/Testimonial.js';
import { uploadTestimonialImage } from '../middleware/TestUpload.js';

const Testimonialrouter = express.Router();

// Get all testimonials
Testimonialrouter.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new testimonial
Testimonialrouter.post('/testimonials', uploadTestimonialImage, async (req, res) => {
  try {
    const { name, position, company, quote } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }
    
    const imagePath = `${process.env.FILE}/uploads/testimonials/${req.file.filename}`;
    
    const testimonial = new Testimonial({
      name,
      position,
      company,
      quote,
      image: imagePath
    });
    
    const savedTestimonial = await testimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update testimonial
Testimonialrouter.put('/testimonials/:id', uploadTestimonialImage, async (req, res) => {
  try {
    const { name, position, company, quote } = req.body;
    const updateData = { name, position, company, quote };
    
    if (req.file) {
      updateData.image = `${process.env.FILE}/uploads/testimonials/${req.file.filename}`;
    }
    
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    
    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    
    res.json(updatedTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete testimonial
Testimonialrouter.delete('/testimonials/:id', async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
    
    if (!deletedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default Testimonialrouter;