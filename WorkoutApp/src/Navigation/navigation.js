import 'react-native-gesture-handler';
import * as React from 'react';
import {   createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from "../Containers/Welcome";
import LoginScreen from '../Containers/Login.js';
import SignupScreen from '../Containers/Signup.js';
import AboutScreen from '../Containers/About.js';
import HomeTrainScreen from '../Containers/HomeTrain.js';
import DetailsScreen from '../Containers/DetailsTrain.js';
import LevelScreen from '../Containers/Level.js';
import ProfileScreen from '../Containers/Profile.js';

const AuthStack = createStackNavigator({
    Welcome : WelcomeScreen,
    Signup : SignupScreen, 
    Login : LoginScreen, 
});

const HomeStack = createStackNavigator ({
    HomeTrain : HomeTrainScreen,
    Details : DetailsScreen,                   
});

const LevelStack = createStackNavigator({
    Level : LevelScreen
});

const ProfileStack = createStackNavigator({
    Profile : ProfileScreen
});

const AppStack = createBottomTabNavigator({
    Home : HomeStack,
    Level : LevelStack,
    Profile : ProfileStack
})

export default createAppContainer(createSwitchNavigator(
    {
        Sign : AuthStack,
        App : AppStack
    },
    {
        initialRouteName :'Sign',
        header:null,
        headerMode: 'none'
    }
))