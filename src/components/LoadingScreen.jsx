import React from 'react';
import { Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const LoadingScreen = ( {size, color, title} ) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator size={size} color={color} />
      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
          fontSize: 20,
        }}>
            {title}
        </Text>
      </View>
    </View>
  );
};
export default LoadingScreen;