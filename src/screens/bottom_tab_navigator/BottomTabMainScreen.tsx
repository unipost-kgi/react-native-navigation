import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View>
      <Text>MessageScreen</Text>
    </View>
  );
}

export default function BottomTabMainScreen() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: '검색',
            tabBarIcon: ({ color, size }) => <Icon name="search" color={color} size={size} />,
          }}
        />

        <BottomTab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: '알림',
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: '메세지',
            tabBarIcon: ({ color, size }) => <Icon name="message" color={color} size={size} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
