import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { API_URL } from '@env';

import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard';

const CategoriesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState({});

  // fetching data from url
  async function fetchData() {
    const response = await axios.get(`${API_URL}`);
    setLoading(false);
    setCategoryList(response.data.categories);
  }

  const renderCategories = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate('Meals', { category: item.strCategory })
      }>
      <CategoryCard name={item.strCategory} image={item.strCategoryThumb} />
    </Pressable>
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {!loading ? (
        <FlatList data={categoryList} renderItem={renderCategories} />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

export default CategoriesScreen;
