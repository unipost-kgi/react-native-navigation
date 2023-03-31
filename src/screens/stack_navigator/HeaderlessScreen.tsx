import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HeaderlessScreen({ navigation }: any) {
  return (
    <SafeAreaView>
      <View>
        <Text>HeaderlessScreen</Text>
        <Button onPress={() => navigation.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
}
