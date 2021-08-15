import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import AppButton from "../../components/AppButton";
import { colors, spacing } from "../../theme";

const StartScreen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Plan your trips</Text>
                <Text style={styles.description}>
                    Connect with other travelers
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Animatable.Image
                    animation="fadeInUpBig"
                    style={styles.image}
                    source={require("../../assets/images/start2.png")}
                />
            </View>
            <Animatable.View
                animation="slideInRight"
                style={styles.btnContainer}
            >
                <AppButton
                    style={styles.login}
                    text="Log In"
                    onPress={() => navigation.navigate("Login")}
                />
                <AppButton
                    style={styles.registartion}
                    text="Create Acccount"
                    onPress={() => navigation.navigate("Registration")}
                />
            </Animatable.View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        flexDirection: "column",
        alignItems: "center",
    },
    textContainer: {
        position: "relative",
        top: spacing.mega,
        alignItems: "center",
    },
    text: {
        color: colors.white,
        fontSize: spacing.heading,
        fontFamily: "bold",
    },
    description: {
        color: colors.light,
        fontSize: spacing.description,
        letterSpacing: 1,
    },
    imageContainer: {
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderTopLeftRadius: spacing.mega,
        borderBottomLeftRadius: spacing.mega,
    },
    btnContainer: {
        position: "relative",
        top: -200,
    },
    login: {
        backgroundColor: colors.blue,
    },
    registartion: {
        backgroundColor: colors.white,
        color: colors.dark,
    },
});

export default StartScreen2;
