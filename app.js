// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home/HomeScreen';
import ProductsScreen from './src/Products/ProductsScreen';
import DetailsScreen from './src/Details/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Products" component={ProductsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
