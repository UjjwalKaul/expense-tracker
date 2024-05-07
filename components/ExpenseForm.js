import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Input from './UI/Input';
import Button from './UI/Button';
export default function ExpenseForm({ onCancel, onSubmit, sumbitButtonLabel }) {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currState) => {
      return { ...currState, [inputIdentifier]: enteredValue };
    });
  }

  function sumbitHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.fieldContainer}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'number-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'DD-MM-YYYY',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button onPress={onSubmit} style={styles.button}>
          {sumbitButtonLabel}
        </Button>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
