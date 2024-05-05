import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

function renderExpense(itemData) {
  return <ExpenseItem {...itemData.item} />;
}
export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpense}
      keyExtractor={(item) => {
        return item.id;
      }}
    />
  );
}
