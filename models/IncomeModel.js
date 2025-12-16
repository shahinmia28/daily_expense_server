// models/Income.js
import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    reason: { type: String, required: true }, // // 'বেতন', 'জমা রাখা' ...
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Income = mongoose.model('Income', incomeSchema);
export default Income;
