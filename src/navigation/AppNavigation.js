import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef, isReadyRef} from './NavigationService';

import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();
const InitialNavigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator initialRouteName="Teams">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InitialNavigator;
