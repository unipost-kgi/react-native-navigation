import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  useEffect(() => {
    navigation.setOptions({
      title: '홈',
    });
  }, [navigation]);

  const onPress = (id: number) => {
    navigation.push('Detail', {
      id,
    });
  };

  return (
    <View>
      <Button title="Detail 1 열기" onPress={() => onPress(1)} />
      <Button title="Detail 2 열기" onPress={() => onPress(2)} />
      <Button title="Detail 3 열기" onPress={() => onPress(3)} />
      <Button title="Headerless 열기" onPress={() => navigation.push('Headerless')} />
    </View>
  );
}
