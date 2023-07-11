import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FavoriteNavigator from './FavoriteNavigator';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={33} />,
      }}
    />
    <Tab.Screen
      name="Favorities"
      component={FavoriteNavigator}
      options={{
        headerShown:false,
        tabBarIcon: () => (
          <MaterialCommunityIcons name="heart" size={33} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
