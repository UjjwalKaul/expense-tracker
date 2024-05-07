import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Input from './UI/Input';

export default function ExpenseForm() {
  function amountChangeHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.fieldContainer}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'number-pad',
            onChangeText: amountChangeHandler,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'DD-MM-YYYY',
            maxLength: 10,
            onChangeText: () => {},
          }}
          style={styles.rowInput}
        />
      </View>

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

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
});
