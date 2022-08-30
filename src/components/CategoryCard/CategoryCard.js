import {View, Text} from 'react-native';
import React from 'react';

const CategoryCard = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default CategoryCard;
