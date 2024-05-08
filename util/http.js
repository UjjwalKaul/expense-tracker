import axios from 'axios';

export default function storeExpense(expenseData) {
  axios.post(
    'https://expense-tracker-3842a-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json',
    expenseData
  );
}
