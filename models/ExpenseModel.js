import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    reason: { type: String, required: true }, // 'বাজর', 'খাবার' ...
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
