// routes/incomes.js
import express from 'express';
import {
  createExpenses,
  deleteAllExpenses,
  deleteExpense,
  getExpenses,
  updateExpense,
} from '../controllers/expenseController.js';
import Expense from '../models/ExpenseModel.js';

const expenseRoute = express.Router();

expenseRoute.get('/', getExpenses); // GET /api/expenses
expenseRoute.post('/', createExpenses); // POST /api/expenses
expenseRoute.put('/update/:id', updateExpense);
expenseRoute.delete('/delete/:id', deleteExpense);
// DELETE ALL EXPENSES
expenseRoute.delete('/delete-all', deleteAllExpenses);
export default expenseRoute;
