// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Computador</Text>
      <Text>Computador de ultima geracao</Text>
      <Text>$2900</Text>
    </View>
  );
};

export default DetailsScreen;
