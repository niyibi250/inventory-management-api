import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';
import logRoutes from './routes/logRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/logs', logRoutes);

export default app;
