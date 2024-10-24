import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import axios from 'axios';

const UniversitiesScreen = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca Universidades</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa país en inglés (e.g., Dominican Republic)"
        value={country}
        onChangeText={setCountry}
      />

      <TouchableOpacity style={styles.button} onPress={fetchUniversities}>
        <Text style={styles.buttonText}>Conseguir universidades</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {universities.map((univ, index) => (
          <View key={index} style={styles.university}>
            <Text style={styles.universityName}>{univ.name}</Text>
            <Text style={styles.universityDomain}>{univ.domains[0]}</Text>
            <Text 
              style={styles.universityLink} 
              onPress={() => Linking.openURL(univ.web_pages[0])}>
              Visitar Sitio Web
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
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
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  university: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  universityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  universityDomain: {
    fontSize: 16,
    color: '#777',
    marginVertical: 5,
  },
  universityLink: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default UniversitiesScreen;
