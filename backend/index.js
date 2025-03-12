import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './connection';

const app = express();
const port = 3000;

// Middleware
connectDB();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});