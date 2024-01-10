import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          {['7', '8', '9', '/'].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.button}
              onPress={() => handlePress(value)}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['4', '5', '6', '*'].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.button}
              onPress={() => handlePress(value)}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['1', '2', '3', '-'].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.button}
              onPress={() => handlePress(value)}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['0', '.', '=', '+', 'C'].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.button}
              onPress={() => handlePress(value)}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    padding: 10, 
    marginTop: 50, 
    marginBottom: 20,
  },
  display: {
    backgroundColor: '#f0f0f0',
    padding: 30,
    alignItems: 'flex-end',
    marginBottom: 60,
    borderRadius: 10,
  },
  input: {
    fontSize: 28,
    color: '#333333',
  },
  result: {
    fontSize: 20, 
    color: '#666666', 
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15, 
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50', 
    height: 70, 
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10, 
    marginBottom: 20, 
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
  },
});

export default Calculator;
