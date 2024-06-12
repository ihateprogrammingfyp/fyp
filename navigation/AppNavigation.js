
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import SignUpScreen from '../screens/SignUpScreen';
import firebase from '../screens/firebaseConfig';
import DriverScreen from '../screens/Driver';
import SignInScreen from '../screens/SignInScreen';
import FillProfileScreen from '../screens/FillProfileScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SelectionScreen from '../screens/SelectionScreen';
import DriverProfileScreen from '../screens/DriverProfileScreen';
import VerifyAgainScreen from '../screens/VerifyAgaincreen';
import HomeScreen from '../screens/Homecreen';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import SupportScreen from '../screens/SupportScreen';
import SefetyScreen from '../screens/SafetyScreen';
import FAQScreen from '../screens/FAQScreen';
import RequestHistory from '../screens/RequestHistoryScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import NextScreen from '../screens/NextScreen';
import FindTexi from'../screens/FindTexiscreen';

import { Screen } from 'react-native-screens';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen  name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
         <Stack.Screen name="RoleSelection" options={{ headerShown: false }} component={RoleSelectionScreen} />
         <Stack.Screen name="SignUp" options={{ headerShown:false}} component={SignUpScreen}  />
         <Stack.Screen name="Driver" options={{ headerShown: true }} component={DriverScreen}  />
         <Stack.Screen name="SignIn" options={{ headerShown: false}} component={SignInScreen}  />
         <Stack.Screen name="FillProfile" options={{ headerShown: true}} component={FillProfileScreen}  />
         <Stack.Screen name="ForgotPassword" options={{ headerShown: true}} component={ForgotPasswordScreen}  />
         <Stack.Screen name="Selection" options={{ headerShown: false}} component={SelectionScreen}  />
        <Stack.Screen name="DriverProfile" options={{ headerShown: false}} component={DriverProfileScreen}  />
        <Stack.Screen name="VerifyAgain" options={{ headerShown: false}} component={VerifyAgainScreen}  />
        <Stack.Screen name="Home" options={{ headerShown: false}} component={HomeScreen}  />
        <Stack.Screen name="Inbox" options={{ headerShown: false}} component={Inbox}  />
        <Stack.Screen name="Profile" options={{ headerShown: false}} component={Profile}  />
        <Stack.Screen name="Support" options={{ headerShown: false}} component={SupportScreen}  />
        <Stack.Screen name="FAQ" options={{ headerShown: false}} component={FAQScreen}  />
        <Stack.Screen name="Safety" options={{ headerShown: false}} component={SefetyScreen}  />
        <Stack.Screen name="RequestHistory" options={{ headerShown: false}} component={RequestHistory}  />
         <Stack.Screen name="NewPassword" options={{ headerShown: false}} component={NewPasswordScreen}  />
         <Stack.Screen name="Next" options={{ headerShown: false}} component={NextScreen}  />


      </Stack.Navigator>
    </NavigationContainer>

    );
  }
