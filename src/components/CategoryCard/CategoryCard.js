import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';

import styles from './CategoryCard.style';

const CategoryCard = props => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          <Image source={{ uri: props.image }} style={styles.image} />
          <Text style={styles.text}>{props.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
