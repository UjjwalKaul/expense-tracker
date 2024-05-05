import { StyleSheet, View } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';
import { GlobalStyles } from '../styles';

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

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
