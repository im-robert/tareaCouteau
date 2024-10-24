import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import axios from 'axios';

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://kinsta.com/wp-json/wp/v2/posts');
        const articles = response.data.slice(0, 3);
        setNews(articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#1E90FF" />
      ) : (
        news.map((article, index) => (
          <View key={index} style={styles.article}>
            <Text style={styles.title}>{article.title.rendered}</Text>
            <Text style={styles.summary}>{article.excerpt.rendered.replace(/<[^>]+>/g, '')}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(article.link)}>
              <Text style={styles.link}>Leer más</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 15,
  },
  article: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#0F90FF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default NewsScreen;
