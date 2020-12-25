import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { GetStarted, LoginScreen,  Mentor,  Messages,  RegisterScreen, SplashScreen, TaniCenter, UploadPhoto } from '../pages';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components/index-components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
        <Tab.Screen name="Mentor" component={Mentor}/>
        <Tab.Screen name="Messages" component={Messages}/>
        <Tab.Screen name="TaniCenter" component={TaniCenter}/>
    </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
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
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='UploadPhoto'
                component={UploadPhoto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MainApp'
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='Messages'
                component={Messages}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='TaniCenter'
                component={TaniCenter}
                options={{headerShown : false}}
            />
            <Stack.Screen 
                name='Mentor'
                component={Mentor}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};
export default Router;