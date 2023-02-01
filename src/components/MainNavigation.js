import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar from './Navbar';
import Search from '../screens/Search';
import SplashScreen from '../screens/SplashScreen';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
       <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown : false}}
        // options={{
        //   header: ({navigation}) => (
        //     <Navbar navigation={navigation} main={false} />
        //   ),
        // }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({navigation}) => (
            <Navbar navigation={navigation} main={true} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          header: ({navigation}) => <Navbar navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: ({navigation}) => <Navbar navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
