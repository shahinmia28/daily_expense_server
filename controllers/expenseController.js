import Expense from '../models/ExpenseModel.js';

export const createExpenses = async (req, res) => {
  try {
    const { reason, amount, date } = req.body;
    if (!reason || amount == null || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const expense = await Expense.create({
      type: 'expense',
      reason,
      amount,
      date,
    });
    return res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    return res.json(expenses);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// UPDATE Expense
export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason, amount, date } = req.body;

    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { type: 'expense', reason, amount, date },
      { new: true } // return updated data
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    return res.json(updatedExpense);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// DELETE Expense
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    return res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteAllExpenses = async (req, res) => {
  try {
    await Expense.deleteMany({});
    res.json({ message: 'All expenses deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
