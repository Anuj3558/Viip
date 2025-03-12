import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './connection.js';
import BussinessSetupRouter from './router/bussinessRouter.js';

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
app.use("/bussiness-setup",BussinessSetupRouter);
// app.use("/company-registration",CompanyRegistrationRouter);
// app.use("/trademark-registration",TrademarkRegistrationRouter);
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});