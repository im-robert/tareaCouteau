import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={require('../assets/toolbox.jpeg')} style={styles.image} />

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gender Predictor')}>
        <Text style={styles.buttonText}>Predictor de género</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Age Predictor')}>
        <Text style={styles.buttonText}>Predictor de edad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Universities')}>
        <Text style={styles.buttonText}>Universidades</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Weather')}>
        <Text style={styles.buttonText}>Clima en RD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('News')}>
        <Text style={styles.buttonText}>Últimas noticias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>Sobre mí</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
  },
  image: {
    width: 210,
    height: 210,
    resizeMode: 'contain',
    marginBottom: 40, 
  },
  buttonContainer: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF54',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12, 
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
