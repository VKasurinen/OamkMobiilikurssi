import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

    const [age, setAge] = useState('');
    const [lowerLimit, setLowerLimit] = useState('');
    const [upperLimit, setUpperLimit] = useState('');
  
    const calculateHeartRateLimits = (ageValue) => {
      if (ageValue) {
        const ageInt = parseInt(ageValue);
        const lower = Math.round((220 - ageInt) * 0.65);
        const upper = Math.round((220 - ageInt) * 0.85);
  
        setLowerLimit(lower.toString());
        setUpperLimit(upper.toString());
      } else {
        setLowerLimit('');
        setUpperLimit('');
      }
    };

    const handleAgeChange = (text) => {
      setAge(text);
      calculateHeartRateLimits(text);
    };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
      placeholder="Enter your age"
      keyboardType="numeric"
      value={age}
      onChangeText={handleAgeChange}/>
      <Text>Hr limits</Text>
      <Text>{lowerLimit} - {upperLimit}</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
