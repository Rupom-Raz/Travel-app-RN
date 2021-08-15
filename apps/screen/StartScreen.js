import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import AppButton from "../../components/AppButton";
import { colors, spacing } from "../../theme";

const StartScreen = ({ navigation }) => {
    return (
        <Animatable.View animation="fadeInUpBig">
            <ImageBackground
                style={styles.bgImage}
                source={require("../../assets/images/start1.png")}
            >
                <View style={styles.container}>
                    <Animatable.View
                        animation="bounceInDown"
                        style={styles.headerTop}
                    >
                        <View style={styles.logo}>
                            <Image
                                source={require("../../assets/images/Logo.png")}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Travel Guide</Text>
                            <Text style={styles.description}>
                                Find your best place for...
                            </Text>
                        </View>
                    </Animatable.View>

                    <View style={styles.headerBottom}>
                        <Animatable.View animation="shake">
                            <AppButton
                                text="Get Started"
                                style={styles.button}
                                onPress={() => navigation.navigate("Start2")}
                            />
                        </Animatable.View>
                        <Text style={styles.description2}>
                            Already have an account?
                            <Text
                                style={{ color: colors.blue }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Log in
                            </Text>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </Animatable.View>
    );
};
const styles = StyleSheet.create({
    bgImage: {
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTop: {
        paddingTop: spacing.mega,
    },
    logo: {
        alignItems: "center",
        paddingTop: spacing.large,
    },
    textContainer: {
        paddingVertical: spacing.medium,
    },
    text: {
        paddingBottom: spacing.small,
        fontFamily: "bold",
        fontSize: spacing.heading,
        color: colors.white,
    },
    description: {
        color: colors.white,
        fontSize: spacing.description,
        textAlign: "center",
    },
    headerBottom: {
        paddingBottom: spacing.large,
        alignItems: "center",
    },
    button: {
        backgroundColor: colors.blue,
    },
    description2: {
        paddingTop: spacing.small,
        marginRight: spacing.body,
        fontSize: spacing.body,
        color: colors.white,
    },
});

export default StartScreen;
