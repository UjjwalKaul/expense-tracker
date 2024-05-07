import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import Input from './UI/Input';
import Button from './UI/Button';
import getFormattedDate from '../util/date';
export default function ExpenseForm({
  onCancel,
  onSubmit,
  sumbitButtonLabel,
  defaultValues,
}) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
    description: defaultValues ? defaultValues.description : '',
  });
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currState) => {
      return { ...currState, [inputIdentifier]: enteredValue };
    });
  }

  function sumbitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descIsValid) {
      Alert.alert('Invalid Input', 'Please check your inputs');
      return;
    }
    onSubmit(expenseData);
  }
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
        <Button onPress={sumbitHandler} style={styles.button}>
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
