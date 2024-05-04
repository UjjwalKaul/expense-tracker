import { View } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';

export default function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary />
      <ExpenseList />
    </View>
  );
}
