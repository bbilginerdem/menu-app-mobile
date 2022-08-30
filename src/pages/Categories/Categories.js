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

const CategoriesScreen = () => {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState({});

  // fetching data from url
  async function fetchData() {
    const response = await axios.get(`${API_URL}`);
    setLoading(false);
    setCategoryList(response.data.categories);
  }

  const renderCategories = ({ item }) => (
    <CategoryCard name={item.strCategory} image={item.strCategoryThumb} />
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
