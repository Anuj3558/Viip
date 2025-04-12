import express from 'express';
import Partnership from '../models/Partnership.js';
import { uploadPartnershipImage } from '../middleware/upload.js';

const Partnershiprouter = express.Router();

// Get all partnerships
Partnershiprouter.get('/partnerships', async (req, res) => {
  try {
    const partnerships = await Partnership.find().sort({ createdAt: -1 });
    res.json(partnerships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new partnership
Partnershiprouter.post('/partnerships', uploadPartnershipImage, async (req, res) => {
  try {
    const { name, description, link, featured } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }
    
    const imagePath = `${process.env.FILE}/uploads/partnerships/${req.file.filename}`;
    
    const partnership = new Partnership({
      name,
      description,
      image: imagePath,
      link: link || '',
      featured: featured === 'true'
    });
    
    const savedPartnership = await partnership.save();
    res.status(201).json(savedPartnership);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update partnership
Partnershiprouter.put('/partnerships/:id', uploadPartnershipImage, async (req, res) => {
  try {
    const { name, description, link, featured } = req.body;
    const updateData = { 
      name, 
      description, 
      link: link || '', 
      featured: featured === 'true' 
    };
    
    if (req.file) {
      updateData.image = `${process.env.FILE}/uploads/partnerships/${req.file.filename}`;
    }
    
    const updatedPartnership = await Partnership.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    
    if (!updatedPartnership) {
      return res.status(404).json({ message: 'Partnership not found' });
    }
    
    res.json(updatedPartnership);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete partnership
Partnershiprouter.delete('/partnerships/:id', async (req, res) => {
  try {
    const deletedPartnership = await Partnership.findByIdAndDelete(req.params.id);
    
    if (!deletedPartnership) {
      return res.status(404).json({ message: 'Partnership not found' });
    }
    
    res.json({ message: 'Partnership deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default Partnershiprouter;