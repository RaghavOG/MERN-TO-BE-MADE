import express from 'express';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import dbConnect from './config/dbConnect.js';

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());


// Connect to MongoDB
dbConnect();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}/`);
  });

app.use('/api/v1/auth', authRoutes);



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
  
