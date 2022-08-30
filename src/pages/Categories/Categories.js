import React, { useState } from 'react';
import { View, Text, Button, Pressable, FlatList } from 'react-native';
import axios from 'axios';

import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard';

const CategoriesScreen = () => {
  const [categoryList, setCategoryList] = useState({});
  async function fetchData() {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );

    setCategoryList(response.data.categories);
  }

  const renderCategories = ({ item }) => (
    <CategoryCard name={item.strCategory} />
  );

  return (
    <View>
      <FlatList data={categoryList} renderItem={renderCategories} />
      <Button onPress={fetchData} title="Fetch Data" color="#841584" />
    </View>
  );
};

export default CategoriesScreen;
