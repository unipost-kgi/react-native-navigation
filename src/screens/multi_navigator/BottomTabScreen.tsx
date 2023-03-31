import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import NotificationScreen from './NotificationScreen';
import SearchScreen from './SearchScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabScreen() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'skyblue',
      }}
    >
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
          tabBarIcon: ({ color, size }) => <Icon name="notifications" color={color} size={size} />,
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
  );
}
