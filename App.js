import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import reducers from './src/Store/Reducers/index'
import SplashScreens from './src/Components/StartScreen/SplashScreens';
import Register from './src/Components/StartScreen/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Splash" 
            component={SplashScreens} 
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{
              headerShown:false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
