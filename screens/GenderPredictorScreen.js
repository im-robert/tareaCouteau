import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const GenderPredictorScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bgColor, setBgColor] = useState('#fff');

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      const predictedGender = response.data.gender;
      setGender(predictedGender);

      if (predictedGender === 'Hombre') {
        setBgColor('#ada8e6'); 
      } else if (predictedGender === 'Mujer') {
        setBgColor('#fcb6c1'); 
      } else {
        setBgColor('#cccccc');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Predictor de Género</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa un nombre"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={predictGender}>
        <Text style={styles.buttonText}>Predecir género</Text>
      </TouchableOpacity>

      {gender ? <Text style={styles.resultText}>Género: {gender}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 11,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultText: {
    fontSize: 20,
    marginTop: 20,
    color: '#333333',
  },
});

export default GenderPredictorScreen;
