import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';
import { GlobalStyles } from '../styles';

export default function ExpensesOutput({ expenses, expensesPeriod, fallback }) {
  let content = <Text style={styles.info}>{fallback}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  info: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
