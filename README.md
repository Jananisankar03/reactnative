import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Heading = ({ text }) => (
  <Text style={styles.heading}>{text}</Text>
);

const FactorialCalculator = () => {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);
  const [numDigits, setNumDigits] = useState(null);
  const [divisibleBy5, setDivisibleBy5] = useState(null);

  const handleNumberChange = (text) => {
    setNumber(text);
  };

  const calculateFactorial = () => {
    const num = parseInt(number);

    if (isNaN(num) || num < 0) {
      Alert.alert('Invalid Input', 'Please enter a non-negative integer.');
      return;
    }

    // Calculate factorial
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    setFactorial(result);

    // Calculate number of digits
    const digits = num.toString().length;
    setNumDigits(digits);

    // Check if divisible by 5
    setDivisibleBy5(num % 5 === 0);
  };

  return (
    <View style={styles.container}>
      <Heading text="Event handling" />

      <Text>Enter a number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleNumberChange}
        value={number}
      />
      <Button title="Calculate" onPress={calculateFactorial} />

      {factorial !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Factorial: {factorial}</Text>
          <Text style={styles.resultText}>Number of Digits: {numDigits}</Text>
          <Text style={styles.resultText}>
            Divisible by 5: {divisibleBy5 ? 'Yes' : 'No'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default FactorialCalculator;