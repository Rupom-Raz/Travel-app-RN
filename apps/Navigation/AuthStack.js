import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../screen/Login";
import Registration from "../screen/Registration";
import StartScreen from "../screen/StartScreen";
import StartScreen2 from "../screen/StartScreen2";

const Stack = createStackNavigator();
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
                name="Registration"
                component={Registration}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
