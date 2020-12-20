import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
//import SplashScreen from './pages/splash-screen/splash-screen';
import { GetStarted} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/index-router';






const App = () => {
  return (
    <NavigationContainer>
      <GetStarted/>
    </NavigationContainer>
  )
}

export default App;

