// routes/incomes.js
import express from 'express';
import {
  createIncome,
  deleteAllIncomes,
  deleteIncome,
  getIncomes,
  updateIncome,
} from '../controllers/incomeController.js';
import Income from '../models/IncomeModel.js';

const incomeRoute = express.Router();

incomeRoute.get('/', getIncomes); // GET /api/incomes
incomeRoute.post('/', createIncome); // POST /api/incomes
incomeRoute.put('/update/:id', updateIncome); // PUT /api/incomes/update/:id
incomeRoute.delete('/delete/:id', deleteIncome); //delete /api/incomes/update/:id
incomeRoute.delete('/delete-all', deleteAllIncomes);

export default incomeRoute;
