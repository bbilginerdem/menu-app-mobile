import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './pages/Categories';
import DetailScreen from './pages/Detail';
import MealsScreen from './pages/Meals';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: 'orange',
          },
          headerTitleAlign: 'center',
          // headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
