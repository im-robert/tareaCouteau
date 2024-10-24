import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/sebasfoto.jpg')} style={styles.photo} />
      <Text style={styles.name}>Roberto Capellán Pérez</Text>
      <Text style={styles.contact}>20220950@itla.edu.do</Text>
      <Text style={styles.contact}>Github: https://github.com/im-robert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc',
    padding: 20,
  },
  photo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#1E90FF',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  contact: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});

export default AboutScreen;
