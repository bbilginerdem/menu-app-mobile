import { View, Text } from 'react-native';
import React from 'react';

import styles from './Meals.style';

const Meals = ({ route }) => {
  const { category } = route.params;

  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};

export default Meals;
