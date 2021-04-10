import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Teams from '../screens/Teams';
import Players from '../screens/Players';
import Games from '../screens/Games';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#222831',
        },
        tabStyle: {
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen name="Teams" component={Teams} />
      <Tab.Screen name="Players" component={Players} />
      <Tab.Screen name="Games" component={Games} />
    </Tab.Navigator>
  );
}
