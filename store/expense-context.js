import { createContext, useReducer } from 'react';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of Shoes',
    amount: 850,
    date: new Date('2024-01-19'),
  },
  {
    id: 'e2',
    description: 'A pair of Trousers',
    amount: 450,
    date: new Date('2024-01-21'),
  },
  {
    id: 'e3',
    description: 'Headphones',
    amount: 2000,
    date: new Date('2024-01-25'),
  },
  {
    id: 'e4',
    description: 'Food',
    amount: 550,
    date: new Date('2024-02-01'),
  },
  {
    id: 'e5',
    description: 'Monitor',
    amount: 5000,
    date: new Date('2024-02-05'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => {
        return expense.id !== action.payload;
      });
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }
  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}
