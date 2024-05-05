import { View, Text, FlatList } from 'react-native';
import React from 'react';

function renderExpense(itemData) {
  return <Text>{itemData.item.description}</Text>;
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
