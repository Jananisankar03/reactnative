import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => (
  <Text style={styles.heading}>{text}</Text>
);

const FactorialCalculator = () => {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState<number | null>(null);
  const [numDigits, setNumDigits] = useState<number | null>(null);
  const [divisibleBy5, setDivisibleBy5] = useState<boolean | null>(null);

  const handleNumberChange = (text: string) => {
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
          <View style={styles.resultBox}>
            <View style={styles.resultLabelBox}>
              <Text style={styles.resultLabelText}>Factorial:</Text>
            </View>
            <View style={styles.resultValueBox}>
              <Text style={styles.resultValueText}>{factorial}</Text>
            </View>
          </View>

          <View style={styles.resultBox}>
            <View style={styles.resultLabelBox}>
              <Text style={styles.resultLabelText}>Number of Digits:</Text>
            </View>
            <View style={styles.resultValueBox}>
              <Text style={styles.resultValueText}>{numDigits}</Text>
            </View>
          </View>

          <View style={styles.resultBox}>
            <View style={styles.resultLabelBox}>
              <Text style={styles.resultLabelText}>Divisible by 5:</Text>
            </View>
            <View style={styles.resultValueBox}>
              <Text style={styles.resultValueText}>
                {divisibleBy5 ? 'Yes' : 'No'}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    width: '100%',
    color: 'black',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    color: 'black',
  },
  
  resultBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  resultLabelBox: {
    flex: 1,
    marginRight: 5,
    backgroundColor: '#eee', 
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultLabelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  resultValueBox: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#ddd', 
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  resultValueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default FactorialCalculator;
