// controllers/incomeController.js
import Income from '../models/IncomeModel.js';

export const createIncome = async (req, res) => {
  try {
    const { reason, amount, date } = req.body;
    if (!reason || amount == null || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const income = await Income.create({
      type: 'income',
      reason,
      amount,
      date,
    });
    return res.status(201).json(income);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ date: -1 });
    return res.json(incomes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// UPDATE Expense
export const updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason, amount, date } = req.body;

    const updatedIncome = await Income.findByIdAndUpdate(
      id,
      { type: 'income', reason, amount, date },
      { new: true } // return updated data
    );

    if (!updatedIncome) {
      return res.status(404).json({ message: 'Income not found' });
    }

    return res.json(updatedIncome);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// DELETE Income
export const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedIncome = await Income.findByIdAndDelete(id);

    if (!deletedIncome) {
      return res.status(404).json({ message: 'Income not found' });
    }

    return res.json({ message: 'Income deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteAllIncomes = async (req, res) => {
  try {
    await Income.deleteMany({});
    res.json({ message: 'All incomes deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
