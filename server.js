import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import incomeRoute from './routes/incomeRoute.js';
import expenseRoute from './routes/expenseRoute.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// routes

app.use('/api/incomes', incomeRoute);
app.use('/api/expenses', expenseRoute);

// MongoDB Connection
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('✅ MongoDB Connected Successfully!');

    app.listen(5000, () => {
      console.log('🚀 Server running on port 5000');
    });
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error);
  }
}

startServer();

// Test route (optional)
app.get('/', (req, res) => {
  res.send('Server is running fine!');
});
