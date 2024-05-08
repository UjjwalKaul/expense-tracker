import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../store/expense-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import Loading from '../components/UI/Loading';

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallback="No expenses made for last 7 days"
    />
  );
}
