import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
//import SplashScreen from './pages/splash-screen/splash-screen';
import { GetStarted } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/index-router';
import FlashMessage from 'react-native-flash-message';






const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position='top' />
    </>
  )
}

export default App;

