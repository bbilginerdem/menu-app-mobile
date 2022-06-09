import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './pages/Categories';
import DetailScreen from './pages/Detail';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
