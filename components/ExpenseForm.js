import { View, Text } from 'react-native';
import React from 'react';
import Input from './UI/Input';

export default function ExpenseForm() {
  function amountChangeHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'number-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCorrect: false,
        }}
      />
    </View>
  );
}
