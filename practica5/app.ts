import express, { Application, Request, Response } from 'express';
import routes from './src/routes/routes';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const router = express.Router();
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

app.use(express.json());
app.use(routes);

mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection error:', error.message));

