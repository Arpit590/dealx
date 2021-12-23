import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import reducers from './src/Store/Reducers/index'
import SplashScreens from './src/Components/StartScreen/SplashScreens';
import Register from './src/Components/StartScreen/Register';
import New from './src/Components/New/New';
import TransactionBuyingScreen from './src/Components/TransactionScreens/TransactionBuyingScreen/TransactionBuyingScreen';
import TransactionSellingScreen from './src/Components/TransactionScreens/TransactionSellingScreen.js/TransactionSellingScreen';
import MyEarningsScreen from './src/Components/TransactionScreens/MyEarningsScreen/MyEarningsScreen';
import ElectricSpares from './src/Components/TransactionScreens/ElectricSparesScreen.js/ElectricSpares';
import ClaimForm from './src/Components/TransactionScreens/ClaimForm';
import TransactionHeader from './src/Components/TransactionScreens/TransactionHeader';
import NewDeal from './src/Components/New/Selling/NewDeal';
import AddNewUser from './src/Components/New/AddNewUser';
import LineItems from './src/Components/New/Selling/LineItems';
import AddOrder from './src/Components/New/AddOrder';
import Quotation from './src/Components/New/Buying/Quotation';

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
          <Stack.Screen 
            name="New" 
            component={New}
            options={{
              header:() => {
                return (
                  <SafeAreaView>
                    <TransactionHeader headingText="What would you like to do?" />
                  </SafeAreaView>
                )
              }
            }}
          />
          {/* selling screens */}
          <Stack.Screen
            name="New Deal"
            component={NewDeal}
            options={{
              title : '',
              headerBackTitle:'Refer Deal',
            }}
          />
          <Stack.Screen
            name="New Quotation"
            component={Quotation}
            options={{
              title : '',
              headerBackTitle:'New Quotation',
            }}
          />
          <Stack.Screen
            name="Line Items"
            component={LineItems}
            options={{
              title : '',
              headerBackTitle:'Add Line Items',
            }}
          />
          <Stack.Screen
            name="Add New User"
            component={AddNewUser}
            options={{
              title : '',
              headerBackTitle:'Add New User'
            }}
          />
          <Stack.Screen
            name="Add Order"
            component={AddOrder}
            options={{
              title : '',
              headerBackTitle:'Add Order'
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
