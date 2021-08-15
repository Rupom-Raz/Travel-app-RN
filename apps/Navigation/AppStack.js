import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { colors } from "../../theme";
import HomeScreen from "../screen/HomeScreen";
import UserProfile from "../screen/UserProfile";
import WelcomeScreen1 from "../screen/WelcomeScreen1";
import WelcomeScreen2 from "../screen/WelcomeScreen2";
import WelcomeScreen3 from "../screen/WelcomeScreen3";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { marginBottom: 5 },
                tabBarActiveTintColor: colors.green,
                tabBarStyle: { backgroundColor: colors.dark, height: 55 },
            }}
        >
            <Tab.Screen
                name="Explore"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="apple-safari"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Trips"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="briefcase-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Saved"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="heart"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="inbox"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="WelcomeScreen1"
                component={WelcomeScreen1}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="WelcomeScreen2"
                component={WelcomeScreen2}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="WelcomeScreen3"
                component={WelcomeScreen3}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={BottomTabNavigator}
            />
        </Stack.Navigator>
    );
};

const AppStack = () => {
    return <StackNavigator />;
};
export default AppStack;
