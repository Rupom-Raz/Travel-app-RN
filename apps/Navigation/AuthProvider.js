import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await firebase.default
                            .auth()
                            .signInWithEmailAndPassword(email, password);
                    } catch (error) {
                        Alert.alert(
                            "Login Failed",
                            "Email or password is incorrect"
                        );
                        console.log(error);
                    }
                },
                register: async (email, password) => {
                    try {
                        await firebase.default
                            .auth()
                            .createUserWithEmailAndPassword(email, password);
                    } catch (error) {
                        console.log(error);
                    }
                },
                fbLogin: async () => {
                    try {
                        await Facebook.initializeAsync({
                            appId: "129950822638965",
                        });
                        const {
                            type,
                            token,
                            expirationDate,
                            permissions,
                            declinedPermissions,
                        } = await Facebook.logInWithReadPermissionsAsync({
                            permissions: ["public_profile", "Email"],
                        });
                        if (type === "success") {
                            // Get the user's name using Facebook's Graph API
                            const response = await fetch(
                                `https://graph.facebook.com/me?access_token=${token}`
                            );
                            Alert.alert(
                                "Logged in!",
                                `Hi ${(await response.json()).name}!`
                            );
                        } else {
                            // type === 'cancel'
                        }
                    } catch ({ message }) {
                        alert(`Facebook Login Error: ${message}`);
                    }
                },

                googleSign: async () => {
                    const { type, idToken, user } = await Google.logInAsync({
                        androidClientId: `1022762929398-9fcrbrp98ju0lu7bd9p4q5q9pei7ru9i.apps.googleusercontent.com`,
                    });

                    if (type === "success") {
                        firebase.default
                            .auth()
                            .signInAnonymously()
                            .catch((err) => console.log(err));
                        const { name, email, photoUrl } = user;
                        firebase.default
                            .database()
                            .ref(`users/${name}`)
                            .set({
                                name: name,
                                email: email,
                                photo: photoUrl,
                            })
                            .then(() => console.log("Data set."));

                        console.log(user);
                    }
                },
                logOut: async () => {
                    firebase.default.auth().signOut();
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
