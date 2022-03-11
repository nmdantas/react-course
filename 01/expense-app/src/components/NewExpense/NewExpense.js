import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);

  const showExpenseForm = () => {
    setExpenseFormVisible(true);
  };

  const saveExpenseHandler = (data) => {
    const expense = {
      ...data,
      id: Math.random(),
    };

    props.onNewExpense(expense);

    setExpenseFormVisible(false);
  };

  const cancelExpenseHandler = () => {
    setExpenseFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!expenseFormVisible && (
        <button type="submit" onClick={showExpenseForm}>
          Add New Expense
        </button>
      )}
      {expenseFormVisible && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancelExpense={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
