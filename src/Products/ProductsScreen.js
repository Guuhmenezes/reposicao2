// ProductsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProductsScreen = ({ navigation }) => {
  const products = [
    { id: 1, name: 'Product 1', image: 'url_to_image', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', image: 'url_to_image', description: 'Description 2', price: 20 },
    { id: 3, name: 'Product 3', image: 'url_to_image', description: 'Description 3', price: 30 },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Products Screen</Text>
      {products.map(product => (
        <TouchableOpacity key={product.id} onPress={() => navigation.navigate('Details', { product })}>
          <Text>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default ProductsScreen;
