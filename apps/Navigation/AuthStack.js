import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ForgotPass from '../screen/ForgotPass'
import Login from '../screen/Login'
import Registration from '../screen/Registration'
import StartScreen from '../screen/StartScreen'
import StartScreen2 from '../screen/StartScreen2'
import VerifyPass from '../screen/VerifyPass'

const Stack = createStackNavigator()
const AuthStack = () => {
   return (
      <Stack.Navigator initialRouteName={StartScreen}>
         <Stack.Screen
            options={{ headerShown: false }}
            name="Start"
            component={StartScreen}
         />
         <Stack.Screen
            options={{ headerShown: false }}
            name="Start2"
            component={StartScreen2}
         />
         <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
         />
         <Stack.Screen
            options={{ headerShown: false }}
            name="ForgotPass"
            component={ForgotPass}
         />
         <Stack.Screen
            options={{ headerShown: false }}
            name="Verify"
            component={VerifyPass}
         />

         <Stack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={Registration}
         />
      </Stack.Navigator>
   )
}

export default AuthStack
