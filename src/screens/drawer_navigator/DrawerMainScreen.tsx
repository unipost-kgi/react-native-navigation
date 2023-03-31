import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { Button, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button title="Setting 열기" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
}

function SettingScreen({ navigation }: any) {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function DrawerMainScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveBackgroundColor: 'skyblue',
          drawerActiveTintColor: 'white',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: '설정',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
