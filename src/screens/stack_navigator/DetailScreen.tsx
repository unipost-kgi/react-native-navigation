import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({ route, navigation }: any) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세정보 ${route.params.id}`,
    });
  }, [navigation, route.params.id]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <View style={styles.buttonContainer}>
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
        <Button
          title="다음"
          onPress={() =>
            navigation.push('Detail', {
              id: route.params.id + 1,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
