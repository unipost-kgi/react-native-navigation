import React from 'react';
import { StyleSheet } from 'react-native';

import MultiMainScreen from './screens/multi_navigator/MultiMainScreen';

export default function App() {
  return <MultiMainScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
