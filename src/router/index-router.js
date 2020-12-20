import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { GetStarted, SplashScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRoutesName='SplashScreen'>
            <Stack.Screen
                name='SplashScreen'
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='GetStarted'
                component={GetStarted}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    )
}
export default Router;