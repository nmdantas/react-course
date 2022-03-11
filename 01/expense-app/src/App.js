import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, updateExpenses] = useState([
    { id: 1, date: new Date(2022, 3, 24), title: 'Car Insurance', amount: 1700 },
    { id: 2, date: new Date(2022, 3, 27), title: 'Credit Card', amount: 300 },
    { id: 3, date: new Date(2022, 3, 27), title: 'Others', amount: 400 },
  ]);

  const newExpenseHandler = (expense) => {
    updateExpenses((prevExpenses) => {
      return [...prevExpenses, expense]
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
