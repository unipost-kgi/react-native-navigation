import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  const onPress = (id: number) => {
    navigation.push('Detail', {
      id,
    });
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Detail 1 열기" onPress={() => onPress(1)} />
    </View>
  );
}
