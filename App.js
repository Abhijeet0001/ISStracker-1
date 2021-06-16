
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import ISSLocation from './Screens/ISSLocation'
import MeteorScreen from './Screens/MeteorScreen'
import UpdateScreen from './Screens/UpdateScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator()
export default function App() {
  return (
    
    <NavigationContainer >
       <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
         <Stack.Screen name="ISSLocation" component={ISSLocation}/>
         <Stack.Screen name="MeteorScreen" component={MeteorScreen}/>
         <Stack.Screen name="UpdateScreen" component={UpdateScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
