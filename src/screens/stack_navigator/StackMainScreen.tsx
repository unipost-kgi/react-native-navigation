import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import DetailScreen from './DetailScreen';
import HeaderlessScreen from './HeaderlessScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function StackMainScreen() {
  const headerLeft = ({ onPress }: any) => (
    <TouchableOpacity onPress={onPress}>
      <Text>Left</Text>
    </TouchableOpacity>
  );
  const headerTitle = ({ children }: any) => (
    <View>
      <Text>{children}</Text>
    </View>
  );
  const headerRight = ({ onPress }: any) => (
    <TouchableOpacity onPress={onPress}>
      <Text>Right</Text>
    </TouchableOpacity>
  );
  const options = {
    headerBackVisible: false,
    headerLeft,
    headerTitle,
    headerRight,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} options={options} />

        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
