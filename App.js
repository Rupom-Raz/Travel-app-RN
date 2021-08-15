import {
    Montserrat_500Medium,
    Montserrat_800ExtraBold,
    useFonts,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import * as firebase from "firebase";
import React from "react";
import { StyleSheet, View } from "react-native";
import Providers from "./apps/Navigation";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export default function App() {
    let [fontsLoaded] = useFonts({
        regular: Montserrat_500Medium,
        bold: Montserrat_800ExtraBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Providers />
                <StatusBar style="light" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
