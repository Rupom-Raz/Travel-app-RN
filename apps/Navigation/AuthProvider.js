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

                facebookLogin: async () => {
                    try {
                        await Facebook.initializeAsync({
                            appId: "129950822638965",
                        });
                        const { type, token } =
                            await Facebook.logInWithReadPermissionsAsync({
                                permissions: ["public_profile"],
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

                            const credental =
                                await firebase.default.auth.FacebookAuthProvider.credential(
                                    token
                                );

                            return firebase.default
                                .auth()
                                .signInWithCredential(credental)
                                .then((data) =>
                                    firebase.default
                                        .database()
                                        .ref("facebookUsers")
                                        .set({
                                            name: data.user.displayName,
                                            photoUrl: data.user.photoURL,
                                            uid: data.user.uid,
                                        })
                                );
                        }
                    } catch ({ message }) {
                        alert(`Facebook Login Error: ${message}`);
                    }
                },

                googleSign: async () => {
                    try {
                        const { type, idToken, user } = await Google.logInAsync(
                            {
                                androidClientId: `1022762929398-9fcrbrp98ju0lu7bd9p4q5q9pei7ru9i.apps.googleusercontent.com`,
                            }
                        );

                        if (type === "success") {
                            const { name, email, photoUrl, id } = user;
                            const googleCredental =
                                firebase.default.auth.GoogleAuthProvider.credential(
                                    idToken
                                );

                            firebase.default
                                .database()
                                .ref("google")
                                .child(id)

                                .set({
                                    name: name,
                                    email: email,
                                    photo: photoUrl,
                                })
                                .then(
                                    firebase.default
                                        .auth()
                                        .signInWithCredential(googleCredental)
                                        .then(alert("Success"))
                                        .catch((err) => console.log(err))
                                );
                        }
                    } catch (error) {
                        console.log(error);
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
