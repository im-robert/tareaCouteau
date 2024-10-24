import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const AgePredictorScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [ageGroup, setAgeGroup] = useState('');

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const predictedAge = response.data.age;
      setAge(predictedAge);

      if (predictedAge < 18) {
        setAgeGroup('Joven');
      } else if (predictedAge < 60) {
        setAgeGroup('Adulto');
      } else {
        setAgeGroup('Anciano');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getImageForAgeGroup = () => {
    if (ageGroup === 'young') return require('../assets/Joven.jpeg');
    if (ageGroup === 'adult') return require('../assets/adulto.jpeg');
    if (ageGroup === 'senior') return require('../assets/anciano.jpeg');
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predictor de Edad</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa un nombre"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={predictAge}>
        <Text style={styles.buttonText}>Predecir edad</Text>
      </TouchableOpacity>

      {age !== null && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Edad: {age}</Text>
          <Text style={styles.resultText}>Categoría: {ageGroup}</Text>
          <Image source={getImageForAgeGroup()} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
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
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#4CAF55', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  result: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 20,
    marginVertical: 10,
    color: '#333',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 10,
  },
});

export default AgePredictorScreen;
