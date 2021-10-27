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
import ElectricSpares from './src/Components/TransactionScreens/ElectricSparesScreen.js/ElectricSpares';
import ClaimForm from './src/Components/TransactionScreens/ClaimForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TransactionBuying">
        <Stack.Screen
          name="TransactionBuying"
          component={TransactionBuyingScreen}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="TransactionSelling"
          component={TransactionSellingScreen}
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
          name="Electric"
          component={ElectricSpares}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="ClaimForm"
          component={ClaimForm}
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
