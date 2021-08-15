import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import React, { useContext, useEffect, useState } from "react";
import AppStack from "./AppStack";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);

    const [initializing, setInitializing] = useState(true);
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = firebase.default
            .auth()
            .onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    if (initializing) return null;

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;
