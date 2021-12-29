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
import NewDeal from './src/Components/New/Selling/NewDeal';
import TransactionScreen from "./src/Components/TransactionScreens/TransactionScreen";
import MyEarningsScreen from "./src/Components/TransactionScreens/MyEarningsScreen/MyEarningsScreen";
import DealsScreen from "./src/Components/TransactionScreens/DealsScreen/DealsScreen";
import DetailForm from "./src/Components/TransactionScreens/DetailForm";
import ClaimForm from "./src/Components/TransactionScreens/ClaimForm";
import MyNetworkScreen from "./src/Components/MyNetworkScreens/MyNetworkScreen";
import AddNewUser from './src/Components/New/AddNewUser';
import LineItems from './src/Components/New/Selling/LineItems';
import AddOrder from './src/Components/New/AddOrder';
import Quotation from './src/Components/New/Buying/Quotation';
import Header from './src/Components/Atoms/Header';
import AboutScreen from './src/Components/MyNetworkScreens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Splash'
        >
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
                    <Header headingText="What would you like to do?" />
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
          name="Transaction"
          component={TransactionScreen}
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
          name="Deals"
          component={DealsScreen}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="Detail Form"
          component={DetailForm}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="Claim Form"
          component={ClaimForm}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="My Network"
          component={MyNetworkScreen}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerShown:false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
