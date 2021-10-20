import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import reducers from './src/Store/Reducers/index'
import SplashScreens from './src/Components/StartScreen/SplashScreens';
import TransactionBuyingScreen from './src/Components/TransactionScreens/TransactionBuyingScreen/TransactionBuyingScreen';
import TransactionSellingScreen from './src/Components/TransactionScreens/TransactionSellingScreen.js/TransactionSellingScreen';
import MyEarningsScreen from './src/Components/TransactionScreens/MyEarningsScreen/MyEarningsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TransactionSelling">
          <Stack.Screen
          name="TransactionSelling"
          component={TransactionSellingScreen}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="TransactionBuying"
          component={TransactionBuyingScreen}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="MyEarnings"
          component={MyEarningsScreen}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen 
            name="Splash" 
            component={SplashScreens} 
            options={{
              headerShown:false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
