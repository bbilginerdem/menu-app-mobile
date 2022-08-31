import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

import CategoriesScreen from './pages/Categories';
import DetailScreen from './pages/Detail';
import MealsScreen from './pages/Meals';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const LogoTitle = () => (
  <MaterialIcons
    style={{ float: 'left' }}
    name="arrow-back-ios"
    size={24}
    color="orange"
  />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: 'orange',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen
          name="Meals"
          component={MealsScreen}
          options={{
            headerBackImage: () => <LogoTitle />,
            headerBackTitleVisible: true,
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
